var express = require('express');
var backend_app = express();
var bodyParser = require('body-parser');
var routes = require('./routes/main_routes');
var cors = require('cors');
var port = 3500;
var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
// var passport = require('passport');
var flash = require('connect-flash');

backend_app.set('view engine', 'ejs');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');

var configDB = require('./config/database.js');

backend_app.use(express.static('public'));
backend_app.use(bodyParser.urlencoded({
    extended: true
}));

backend_app.use(bodyParser.json());
backend_app.use(cors());
backend_app.use(routes);

backend_app.listen(port, listening);
function listening() {
    console.log('broadcasting on localhost:' + port);
}
