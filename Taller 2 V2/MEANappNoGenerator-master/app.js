
//Importe e instancia de Express
var express = require('express');
var app = express();


//Importe e instancia de Path
var path = require('path');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));


//Importe e instancia del motor de vistas (HTML)
var cons = require('consolidate');
// view engine setup
app.engine('html', cons.swig)
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');


//Importe e instancia de morgan
var logger = require('morgan');
app.use(logger('dev'));


//Importe e instancia de CookieParser
var cookieParser = require('cookie-parser');
app.use(cookieParser());


//Importe e instancia de bodyParser
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//Importe e instancia de ruta principal
var index = require('./routes/index');
app.use('/', index);

//Importe e instancia de ruta API
var api = require('./routes/api');
app.use('/api', api);






//////////////////////////////FUNCIONES DE MANEJO DE EXCEPCIONES////////////////////////////////////////


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
