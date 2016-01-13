var pg = require('pg');
var path = require('path');
var dbConn = require(path.join(__dirname, '../', '../', 'config'));

var client = new pg.Client(dbConn);
client.connect();
var query = client.query('CREATE TABLE items(id SERIAL PRIMARY KEY, text VARCHAR(40) not null, complete BOOLEAN)');
query.on('end', function() { client.end(); });