const express = require('express');

const server = express();

server.use(express.json());

const users = ['Leonardo', 'Gustavo', 'Lucas'];

server.use((req, res, next) => {
  console.log(`Metodo ${req.method} e URL ${req.url}`);
  console.log('A requisição foi chamada');
  return next();
});

function checkUserExists(req, res, next) {
  if (!req.body.name) {
    return res.status(400).json({ error: 'Username is required' });
  }
  return next();
}

function checkUserExistsInArray(req, res, next) {
  const user = users[req.params.index];
  if (!user) {
    return res.status(400).json({ error: 'User not found' });
  }

  req.user = user;

  return next();
}

server.get('/users', (req, res) => {
  return res.json(users);
});

server.get('/users/:index', checkUserExistsInArray, (req, res) => {
  return res.json(req.user);
});

server.post('/users', checkUserExists, (req, res) => {
  const { name } = req.body;
  users.push(name);
  return res.json(users);
});

server.put('/users/:index', checkUserExists, checkUserExistsInArray, (req, res) => {
  const { index } = req.params;
  const { name } = req.body;
  users[index] = name;
  return res.json(users);
});

server.delete('/users/:index', (req, res) => {
  const { index } = req.params;
  users.splice(index, 1);
  return res.send();
});

server.listen(3000);