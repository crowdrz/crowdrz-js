const Crowdrz = require('../lib/crowdrz');

const getCommentsDemo = async function() {
  let crowdrz = new Crowdrz();
  crowdrz.addScope('facebook', '<api key>')
  let res = await crowdrz.facebook.getComments('<post id>', 26, crowdrz.facebook.token);
  console.log('res', res);
}

getCommentsDemo();
