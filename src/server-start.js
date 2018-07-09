require('babel-register');
require('babel-polyfill');
const WebApi = require('./web-api');

WebApi.start()
  .then(console.info)
  .catch(e => {
    console.error(e);
    process.abort();
  });
