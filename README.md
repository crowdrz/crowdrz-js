# Crowdrz.js

![npm](https://img.shields.io/npm/v/@crowdrz/crowdrz-js)![CircleCI](https://img.shields.io/circleci/build/github/crowdrz/crowdrz-js/master)![NPM](https://img.shields.io/npm/l/@crowdrz/crowdrz-js)

Simplified wrapper for social API.

## Installation

Use the package manager [npm](https://www.npmjs.com/) to install Crowdrz.js.

```bash
npm install --save @crowdrz/crowdrz-js
```

## Usage

```javascript
const Crowdrz = require('@crowdrz/crowdrz-js');

let facebookWrapper = new Crowdrz('facebook', '<api key>');
let comments = facebookWrapper.applyProcess('getComments', '<ressource id>');
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)
