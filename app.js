var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const cors = require('cors') //t0d
const helmet = require('helmet') //t0d
const dotenv = require('dotenv') //t0d
dotenv.config() //t0d

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

const emptyRouter = require('./routes/rt-empty') //t0d
const imwObjRouter = require('./routes/rt-imwObj') //t0d
const tsqlHubRouter = require('./routes/rt-tsqlHub') //t0d

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(cors()) //t0d
app.use(helmet()) //t0d

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.use('/empty', emptyRouter) //t0d
app.use('/imwObj', imwObjRouter) //t0d
app.use('/tsqlHub', tsqlHubRouter) //t0d

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;