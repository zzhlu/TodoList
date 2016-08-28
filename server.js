const express = require('express');
const app = new express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static('./views'));
app.use(express.static('./public'));
app.use(express.static('./dist'));

const todos = [];

app.post('/todo', (req, res) => {
  todos.push({text: req.body.text, isDone: false});
  res.send(todos);
});

app.delete('/todo', (req, res) => {
  todos.splice(req.body.index, 1);
  res.send(todos);
});

app.get('/todos', (req, res) => {
  res.send(todos);
});

var server = app.listen(3000, function () {
  var port = server.address().port;
  console.log('Listening at port %s', port);
});

