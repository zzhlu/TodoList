const express = require('express');
const app = new express();
const bodyParser = require('body-parser');
const session = require('express-session');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static('./views'));
app.use(express.static('./public'));
app.use(express.static('./dist'));
app.use(session({
  secret: 'a',
  resave: true,
  saveUninitialized: true,
}));

const todos = [];
let filterTodos = todos;
let id = 0;

app.post('/todo', (req, res)=> {
  todos.push({text: req.body.text, isDone: false, id: id++});
  res.send(todos);
});
app.delete('/todo', (req, res)=> {
  const index = todos.indexOf(todos.find(t => t.id === req.body.id));
  todos.splice(index, 1);
  res.send(todos);
});

app.get('/todos', (req, res)=> {
  res.send(todos);
});

app.put('/todo', (req, res)=> {
  const index = todos.indexOf(todos.find(t => t.id === req.body.id));
  todos[index].isDone = !todos[index].isDone;
  res.send(todos);
});

app.post('/filterTodos', (req, res)=> {
  if (req.body.filterName === 'All') {
    filterTodos = todos;
  } else if (req.body.filterName === 'Active') {
    filterTodos = todos.filter(todo=>!todo.isDone)
  } else {
    filterTodos = todos.filter(todo=>todo.isDone)
  }
  res.send(filterTodos);
});

var server = app.listen(3000, function () {
  var port = server.address().port;
  console.log('listening at port %s', port);
});