var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var swig = require('swig');
swig.setDefaults({ cache: false });

var app = express();

app.use(express.static(__dirname + '/node_modules'));

app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride('_method'));

app.set('view engine', 'html');
app.engine('html', swig.renderFile);

app.get('/', function(req, res, next){
  res.render('index', { nav: 'home', title: 'Home' });
});

app.use('/products', require('./products.routes'));

app.listen(process.env.PORT, function(){
  console.log('listening on ' + process.env.PORT);
});
