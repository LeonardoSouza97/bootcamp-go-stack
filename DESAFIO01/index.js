const express = require('express');
const routes = require('./routes');

const server = express();

server.use((req, res, next) =>{
  console.count(`Número de requisições`);
  next();
});

server.use(express.json());
server.use(routes);

server.listen(3000);

