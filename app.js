var express = require('express');// ใช้งาน module express
var path = require('path'); // สร้างตัวแปร app เป็น instance ของ express
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var login = require('./controllers/login')
var logout = require('./controllers/logout')
var position = require('./controllers/position')
var authentication = require('./middlewares/authentication')
var permission = require('./middlewares/permission')
var manageManager = require('./controllers/manage-manager')
var manageEmployee = require('./controllers/manage-employee')
var manageTypecar = require('./controllers/manage-typecar')
var manageCar = require('./controllers/car')
var manageCleanservice = require('./controllers/manage-cleanservice')
var managePromotion = require('./controllers/manage-promotion')
var manageTool = require('./controllers/manage-washtool')
var booking = require('./controllers/booking-service')
var loginWithToken = require('./controllers/loginWithToken')

const corsOptions = {
    origin: process.env.URL||"http://localhost:4200",
    preflightContinue: false,
}
var app = express();

app.use(cors(corsOptions))
app.options('*', cors(corsOptions))
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use(cors(corsOptions))
app.options('*', cors(corsOptions))
app.use('/auth', login)
app.use('/loginWithToken', authentication, loginWithToken)
app.use('/logout', authentication, logout)
app.use('/position', position)
app.use('/car', manageCar)
app.use('/booking', booking.router)
app.use('/manageManager', authentication, permission([1]), manageManager)
app.use('/manageEmployee', manageEmployee)
app.use('/manageTypecar', manageTypecar)
app.use('/manageCleanservice', manageCleanservice)
app.use('/managePromotion', managePromotion)
app.use('/manageTool', manageTool)

module.exports = app;

