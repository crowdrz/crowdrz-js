'use strict';

// Definition of all module.

module.exports = {
  'facebook': {
    'getComments': require('./facebook/getComments'), // Get Facebook comments from post
    'getPosts': require('./facebook/getPosts') // Get posts list from page
  }
}