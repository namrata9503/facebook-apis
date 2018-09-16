var express = require('express');
var path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

mongoose.connect('mongodb://localhost:27017/facebook-apis')
mongoose.connection.on('error', (error) => console.error(error))
mongoose.connection.on('open', () => console.log('successfully connected with mongodb..'))


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);


const userController = require('./controllers/users');


app.get('/api/v1/users', userController.getAllUsers);
app.post('/api/v1/users', userController.postNewUsers);
app.put('/api/v1/users/:id', userController.updateUser);
app.delete('/api/v1/users/:id', userController.delUsersById);

module.exports = app;
