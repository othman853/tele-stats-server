const bodyParser = require('body-parser');
const expressServer = require('express')();
const httpServer = require('http').createServer(expressServer);
const socketServer = require('socket.io')(httpServer);
const routes = require('./routes');
const tvSocketServer = socketServer.of('/tv');
const controlSocketServer = socketServer.of('/control');

module.exports = configDir => {

  tvSocketServer.on('connection', client => {
    console.log('A new TV is connected');
  });

  controlSocketServer.on('connection', client => {
    console.log('A new Remote Control is connected');
  });

  expressServer.use(bodyParser.json());
  expressServer.use('/tv', routes.tv(tvSocketServer, configDir));

  return {
    http: httpServer,
    express: expressServer,
    socket: {
      all: socketServer,
      tv: tvSocketServer,
      control: controlSocketServer
    }
  };

};
