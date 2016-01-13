var express = require('express'),
  routes = require('./routes'),
  api = require('./routes/api'),
	bodyParser = require('body-parser'),
	exprSession = require('express-session'),
	logger = require('morgan'),
	cookieParser = require('cookie-parser');

var app = module.exports = express();


  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
app.use(logger('dev')); //logs requests to the console
app.use(bodyParser.urlencoded({extended:true})); // for parsing application/x-www-form-urlencoded
app.use(bodyParser.json()); //for parsing json
app.use(cookieParser()); //reading cookies
 
  app.use(express.static(__dirname + '/public'));
 




app.get('/', routes.index);
app.get('/partials/:name', routes.partials);

app.get('/api/contacts', api.contacts);
app.get('/api/contacts/:id', api.contact);
app.post('/api/contacts', api.createContact);
app.put('/api/contacts/:id', api.updateContact);
app.delete('/api/contacts/:id', api.destroyContact);

app.get('*', routes.index);

app.listen(3000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});
