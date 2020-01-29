const { Router } = require('express');

const routes = Router();

let projects = [];

function checkProjectExists(req, res, next) {
  const { id } = req.params;

  let element = projects.find(p => p.id == id);

  if (!element) {
    return res.status(400).json({ error: `Projeto com o id ${id} náo foi encontado` });
  }

  req.project = element;

  return next();
}

routes.post('/projects', (req, res) => {
  const { id, title } = req.body;
  const tasks = [];
  const project = { id, title, tasks };
  projects.push(project);

  return res.json(projects);
});

routes.get('/projects', (req, res) => {
  return res.json(projects);
});

routes.put('/projects/:id', checkProjectExists, (req, res) => {
  const { title } = req.body;

  let project = projects.find(p => p.id == req.project.id);

  if (!project) {
    res.status(400).send('Não foi possível encontrar um projeto com este id');
  }

  project.title = title;

  res.json(project);
});

routes.delete('/projects/:id', checkProjectExists, (req, res) => {
  projects = projects.filter((p => p.id != req.project.id));

  return res.json(projects);
});

routes.post('/projects/:id/task', checkProjectExists, (req, res) => {
  const { title } = req.body;

  let project = req.project;

  project.tasks.push(title);

  return res.json(project);
});

module.exports = routes;