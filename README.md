 <!-- PROJECT LOGO -->
<p align="center">
  <a href="https://github.com/crowdrz/crowdrz-js">
    <img src="ressources/logo-js.png" alt="Logo" height="80">
  </a>
  <p align="center">
    Query builder for social APIs.
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

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Test](#test)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

### Prerequisites

This project uses [node](http://nodejs.org/) and [npm](https://npmjs.com/).

- npm

```bash
npm install npm@latest -g
```

### Installation

1. Install package with [npm](https://npmjs.com/) or [yarn](https://yarnpkg.com).

```bash
# NPM
npm install --save @crowdrz/crowdrz-js

# Yarn
yarn add @crowdrz/crowdrz-js
```

2. include it in your code.

```javascript
const Crowdrz = require('@crowdrz/crowdrz-js')
```

## Usage

```javascript
const Crowdrz = require('@crowdrz/crowdrz-js')

const apiToken = '<api key>'

const facebook = new Crowdrz('facebook')

facebook.setToken(apiToken)
const me = await facebook.call('GET', '/me')
const me2 = await facebook
  .setMethod('GET')
  .setEndpoint('/me')
  .call()
const me3 = await facebook.setEndpoint('/me').get()
console.log(me, me2, me3) // Same Output
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
