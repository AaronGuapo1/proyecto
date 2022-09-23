var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var obtenerRouter = require('./routes/obtener');
var guardarRouter = require('./routes/guardar');
const { Console } = require('console');
const {grades} = require('./modeloUser');
var app = express();
const bodyParser = require('body-parser');



//conexión
const DB_URI='mongodb://localhost:27017/A'
//mongoose.set('useCreateIndex',true)
mongoose.connect(DB_URI,{useNewUrlParser:true,useUnifiedTopology:true},(err)=>{
    if(err){
      console.log("error");
  }else{
    console.log("conexión correcta");
  }

  });






app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(bodyParser.urlencoded({ extended: true })); 

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/obtener', obtenerRouter);
app.use('/guardar', guardarRouter);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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
