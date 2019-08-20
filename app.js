'use strict';

const Koa = require('koa');
const app = new Koa();

app.listen(3030, '0.0.0.0', () => {
  console.log('Server listening on port: ' + 3030);
});

module.exports = app;