var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var mongoose = require('mongoose');


// Controllers
var RandomCtrl = require('./api/controllers/ServerController');

// Express
var app = express();

// Express Middleware
app.use(express.static("public"));
app.use(bodyParser.json());
app.use(cors());

// Endpoints
app.post('/api/subject-items-Lists', RandomCtrl.create);
app.get('/api/subject-items-Lists', RandomCtrl.read);
app.put('/api/subject-items-Lists/:id', RandomCtrl.update);
app.delete('/api/subject-items-Lists/:id', RandomCtrl.delete);

// Connections
var port = 9876;
var mongoUri = 'mongodb://localhost:27017/random-generator';

mongoose.set('debug', true);
mongoose.connect(mongoUri);
mongoose.connection.once('open', function() {  ////event listener
  console.log('connected to mongoDB at: ', mongoUri);
});

app.listen(port, function() {
  console.log('listening on port: ', port);
});
