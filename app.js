var express = require('express'); // ใช้งาน module express
var path = require('path'); // สร้างตัวแปร app เป็น instance ของ express
var cookieParser = require('cookie-parser'); 
var logger = require('morgan'); 

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var login = require('./controllers/login')
var logout = require('./controllers/logout')
var authentication  = require('./middlewares/authentication')
var permission = require('./middlewares/permission')
var manageManager = require('./controllers/manage-manager')
var manageEmployee = require('./controllers/manage-employee')

var app = express();
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/login', login)
app.use('/logout', authentication, logout)
app.use('/manageManager', authentication,permission([1]), manageManager)
app.use('/manageEmployee', authentication,permission([2]), manageEmployee)

module.exports = app;
