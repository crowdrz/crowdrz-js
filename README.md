# Crowdrz JS 

![npm](https://img.shields.io/npm/v/@crowdrz/crowdrz-js) ![CircleCI](https://img.shields.io/circleci/build/github/crowdrz/crowdrz-js/master) ![NPM](https://img.shields.io/npm/l/@crowdrz/crowdrz-js)

Simplified wrapper for social APIs.

## Installation

This project uses [node](http://nodejs.org/) and [npm](https://npmjs.com/). Go check them out if you don't have them locally installed.

```bash
npm install --save @crowdrz/crowdrz-js
```

## Usage

```javascript
const Crowdrz = require('@crowdrz/crowdrz-js');

const crowdrz = new Crowdrz();
crowdrz.addScope('facebook', '<api key>');
let comments = crowdrz.facebook.getComments('<post id>');
```

## Test

```bash
npm test
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
MIT
