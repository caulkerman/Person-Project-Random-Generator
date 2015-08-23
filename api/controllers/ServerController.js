var Random = require('../models/ServerModel');  //you need to name this correctly change all instances of Random

module.exports = {

  create: function(req, res) { /////manipulate before you create the document
    console.log('in create - req: ', req.body);
    
    var newRandom = new Random(req.body);////this is a document. it is an object, it returns an object.
    console.log('new Random: ', newRandom);
    newRandom.save(function(err, result) {
      if (err) return res.status(500).send(err);
      else res.send(result);
    });
  },

  read: function(req, res) { /////to find something you create a query
    Random.find(req.query)
    .exec(function(err, result) {
      if (err) return res.status(500).send(err);
      else res.send(result);
    });
  },

  update: function(req, res) {
    Random.findByIdAndUpdate(req.params.id, req.body, function(err, result) {
      if (err) return res.status(500).send(err);
      else res.send(result);
    });
  },

  delete: function(req, res) {
    Random.findByIdAndRemove(req.params.id, function(err, result) {
      if (err) return res.status(500).send(err);
      else res.send(result);
    });
  }
};
