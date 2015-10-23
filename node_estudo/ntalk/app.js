var express = require('express')
    , load = require('express-load')
    , bodyParser = require('body-parser')
    , cookieParser = require('cookie-parser')
    , session = require('express-session')
    , methodOverride = require('method-override')
    , app = express();
//     , routes = require('./routes');

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(cookieParser('ntalk'));
app.use(session());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(methodOverride());
//app.use(app.router);
app.use(express.static(__dirname + '/public'));

//app.get('/', routes.index);
//app.get('/usuarios', routes.user.index);

load('models')
    .then('controllers')
    .then('routes')
    .into(app);

app.listen(3000, function(){
    console.log("Ntalk no ar.");
});