const WatchedObjectsRegistry = {
	watchingObjects: {}
}

class StoredWatchedObject {
	constructor(value) {
		this.creationTime = new Date().getTime()
		this.lastEditTime = new Date().getTime()
		this.lastTimeValueUpdated = new Date().getTime()
		this.storedValue = value;
		this.oldValues = [];
		this.watchingUUID = uuidv4()
		WatchedObjectsRegistry.watchingObjects[this.watchingUUID] = this;
	}
}

class WatchedObjectValue {
	constructor(value, start, end) {
		this.value = value;
		this.valueStart = start;
		this.valueEnd = end;
	}
}

class WatchedObject {
	constructor(value) {
		if(value instanceof String) {
			if(WatchedObjectsRegistry.watchingObjects[value] != null) {
				this.watchingUUID = value;
				this.currentValue = WatchedObjectsRegistry.watchingObjects[value].storedValue;
				WatchedObjectsRegistry.watchingObjects[value].lastTimeValueUpdated = new Date().getTime();
				return;
			}
		}
		this.currentValue = value;
		let s = new StoredWatchedObject(value);
		this.watchingUUID = s.watchingUUID;
	}
	updateValue() {
		this.currentValue = WatchedObjectsRegistry.watchingObjects[this.watchingUUID].storedValue;
		WatchedObjectsRegistry.watchingObjects[this.watchingUUID].lastTimeValueUpdated = new Date().getTime();
	}
	setValue(value) {
		let storedValue = WatchedObjectsRegistry.watchingObjects[this.watchingUUID].storedValue;
		
		if(value != storedValue) {
			WatchedObjectsRegistry.watchingObjects[this.watchingUUID].oldValues.push(new WatchedObjectValue(storedValue, this.lastEditTime, new Date().getTime()))
			WatchedObjectsRegistry.watchingObjects[this.watchingUUID].lastEditTime = new Date().getTime();
			WatchedObjectsRegistry.watchingObjects[this.watchingUUID].storedValue = value;
			this.currentValue = value;
		}	
		else {
			console.warn("WatchedObjects: The stored Value is the same as the new value! UUID: " + this.watchingUUID)
		}
	}
}

function uuidv4() {
  return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
    (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
  );
}

