
<a name="readme-top"></a>

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]

<br />
<div align="center">
  <a href="https://github.com/Zffu/WatchedObjects">
  </a>

  <h3 align="center">WatchedObjects</h3>

  <p align="center">
    A Javascript lib to add value history and timestamps
    <br />
    <a href="https://github.com/Zffu/WatchedObjects/wiki"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/Zffu/WatchedObjects/">View Demo</a>
    ·
    <a href="https://github.com/Zffu/WatchedObjects/issues">Report Bug</a>
    ·
    <a href="https://github.com/Zffu/WatchedObjects/issues">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With Javascript</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project


This project was created because i was bored. It can be used in various things.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With

This project is built with Vanilla Javascript

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

To get started with WatchedObjects, you can check the wiki page

### Installation

Before using WatchedObjects you will need to install it, you can do it by adding this to your html file: 
(Comming very soon)
  ```html
  <script src="https://cdn.zffu.ml/js/watchedobjects/1.0/WatchedObjects-1.0.js"></script>
  ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

You can use WatchedObjects to do something like this: 
```javascript
// Create a WatchedObject with a constructor
let myWatchedObject = new WatchedObject("hello world");

// Easier Method to create a WatchedObject
"hello world".toWatchedObject()

// This will throw a warning because its already the given value
myWatchedObject.setValue("hello world")

// This will print the last edit time of the value in the console 
console.log(myWatchedObject.getLastEditTimestamp())

// Get the stored version of the WatchedObject
let myStoredWatchedObject = myWatchedObject.getStored();

// This will update the value of the WatchedObject object from the stored version
myWatchedObject.updateValue()

```

_For more examples, please refer to the [Documentation](https://github.com/Zffu/WatchedObjects/wiki)_

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ROADMAP -->
## Roadmap

- [x] Add the Basic WatchedObjects system
- [ ] Add more function to make it easier

See the [open issues](https://github.com/Zffu/WatchedObjects/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>






<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/Zffu/WatchedObjects.svg?style=for-the-badge
[contributors-url]: https://github.com/Zffu/WatchedObjects/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/Zffu/WatchedObjects.svg?style=for-the-badge
[forks-url]: https://github.com/Zffu/WatchedObjects/network/members
[stars-shield]: https://img.shields.io/github/stars/Zffu/WatchedObjects.svg?style=for-the-badge
[stars-url]: https://github.com/Zffu/WatchedObjects/stargazers
[issues-shield]: https://img.shields.io/github/issues/Zffu/WatchedObjects.svg?style=for-the-badge
[issues-url]: https://github.com/Zffu/WatchedObjects/issues
[license-shield]: https://img.shields.io/github/licenseZffu/WatchedObjects.svg?style=for-the-badge
[license-url]: https://github.com/Zffu/WatchedObjects/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/othneildrew
[product-screenshot]: images/screenshot.png
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
[Svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[Svelte-url]: https://svelte.dev/
[Laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[Laravel-url]: https://laravel.com
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com 
