const cors = require('cors');
const createError = require('http-errors');
const cookieParser = require('cookie-parser')
const express = require('express');
const helmet = require('helmet');
const path = require('path');
const logger = require('morgan');
const csurf = require('csurf');
const http = require('http');

const routes = require('./routes');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(routes);

app.use(function(_req, _res, next) {
  next(createError(404));
});
const server = http.createServer(app);
server.listen(3000);
server.on('listening', onListening);

function onListening() {
  const addr = server.address();
  const bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port;
  console.log('Listening on ' + bind);
}
module.exports = app;
