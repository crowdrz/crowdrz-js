 <!-- PROJECT LOGO -->
<p align="center">
<!--
  <a href="https://github.com/othneildrew/Best-README-Template">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a>
-->

  <h3 align="center">Crowdrz JS</h3>

  <p align="center">
    Simplified wrapper for social APIs.
    <br />
    <a href="https://github.com/crowdrz/crowdrz-js"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/crowdrz/crowdrz-js/issues">Report Bug</a>
    ·
    <a href="https://github.com/crowdrz/crowdrz-js/issues">Request Feature</a>
    <br />
    <br />
    <img src="https://img.shields.io/npm/v/@crowdrz/crowdrz-js" alt="npm">
    <img src="https://img.shields.io/circleci/build/github/crowdrz/crowdrz-js/master" alt="CircleCI">
    <img alt="npm" src="https://img.shields.io/npm/dt/@crowdrz/crowdrz-js">
    <img src="https://img.shields.io/npm/l/@crowdrz/crowdrz-js" alt="NPM">
  </p>
</p>

<!-- TABLE OF CONTENTS -->
## Table of Contents

* [Getting Started](#getting-started)
  * [Prerequisites](#prerequisites)
  * [Installation](#installation)
* [Usage](#usage)
* [Test](#test)
* [Roadmap](#roadmap)
* [Contributing](#contributing)
* [License](#license)

## Getting Started

### Prerequisites

This project uses [node](http://nodejs.org/) and [npm](https://npmjs.com/).
* npm
```bash
npm install npm@latest -g
```

### Installation

1. Install package with [npm](https://npmjs.com/).
```bash
npm install --save @crowdrz/crowdrz-js
```
3. include it in your code.
```javascript
const Crowdrz = require('@crowdrz/crowdrz-js');
```

## Usage

```javascript
const Crowdrz = require('@crowdrz/crowdrz-js');

const crowdrz = new Crowdrz();
crowdrz.addScope('facebook', '<api key>');
let comments = crowdrz.facebook.getComments('<post id>', 25);
```

## Available Methods

### Facebook

#### getComments(postId, x)
> Get x last comments for a facebook post. Set x at -1 to get all comments.
> 
> **Defaults:** `v4`

```javascript
let comments = crowdrz.facebook.getComments('<post id>', 25);
```


## Test

```bash
npm test
```

<!-- ROADMAP -->
## Roadmap

See the [open issues](https://github.com/crowdrz/crowdrz-js/issues) for a list of proposed features (and known issues).

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.
