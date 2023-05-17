const WatchedObjectsRegistry = {
	watchingObjects: {},
	makeUUID: function() {
		return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
    		(c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
  		);
	},
	isWatchedObject: function(object) {
		if(object instanceof WatchedObject && WatchedObjectsRegistry.watchingObjects[object["watchingUUID"]] != undefined) {
			return true;
		}
		return false;
	}
}

class StoredWatchedObject {
	constructor(value) {
		this.creationTime = new Date().getTime()
		this.lastEditTime = new Date().getTime()
		this.lastTimeValueUpdated = new Date().getTime()
		this.storedValue = value;
		this.oldValues = [];
		this.watchingUUID = WatchedObjectsRegistry.makeUUID()
		WatchedObjectsRegistry.watchingObjects[this.watchingUUID] = this;
	}
	isLinkedTo(watchedObject) {
		if(watchedObject["watchingUUID"] != undefined) {
			return this.watchingUUID == watchedObject["watchingUUID"]
		}
		else {
			return false;
		}
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
	getLastEditTimestamp() {
		return this.getStored().lastEditTime;
	}
	getCreatedTimestamp() {
		return this.getStored().creationTime;
	}
	getStored() {
		return WatchedObjectsRegistry.watchingObjects[this.watchingUUID];
	}
	updateValue() {
		this.currentValue = WatchedObjectsRegistry.watchingObjects[this.watchingUUID].storedValue;
		WatchedObjectsRegistry.watchingObjects[this.watchingUUID].lastTimeValueUpdated = new Date().getTime();
	}
	delete() {
		WatchedObjectsRegistry.watchingObjects.delete(WatchedObjectsRegistry.watchingObjects.indexOf(WatchedObjectsRegistry.watchingObjects[this.watchingUUID]))
		this = null;
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

Object.prototype.toWatchedObject = function() {
	return new WatchedObject(this)
}

