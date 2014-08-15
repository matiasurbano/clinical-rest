"use strict";    


var express        = require('express');
var morgan         = require('morgan');
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');
var app            = express();


var Conf = require('./conf');
//var MongoClient = require('mongodb').MongoClient;     
     

var config = new Conf().load("dev",{ PORT : 3003 });
console.log(config);

// config
app.use(express.static(__dirname + '/public')); 	// set the static files location /public/img will be /img for users
app.use(morgan('dev')); 					// log every request to the console
app.use(bodyParser()); 						// pull information from html in POST
app.use(methodOverride()); 					// simulate DELETE and PUT


MongoClient.connect(config.MONGODB_URL, function(err, db) {
  if(err) throw err;

    console.log('Connected to Mongodb...');
    // Application routes
    //routes(app, db);



    var users = db.collection('users');
  
    users.find().toArray(function(err,users){
      console.log(users.length);
      console.log(users);
    
    })
    
    //start listening
    var port = process.env.PORT || config.PORT;
    app.listen(port, function() {
        console.log("Listening on " + port);
    });
});