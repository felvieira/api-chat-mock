const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3000;
const logRequest = require('./middlewares/log-request');

server.use(middlewares);
server.use(logRequest);
server.use(router);

server.listen(port);