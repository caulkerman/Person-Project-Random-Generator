var Raffle = require('../models/raffleServerModel'); 

module.exports = {

  create: function(req, res) { 
    var newRaffle = new Raffle(req.body);
    newRaffle.save(function(err, result) {
      if (err) return res.status(500).send(err);
      else res.send(result);
    });
  },

  read: function(req, res) {
    Raffle.find(req.query)
    .exec(function(err, result) {
      if (err) return res.status(500).send(err);
      else res.send(result);
    });
  },

  update: function(req, res) {
    Raffle.findByIdAndUpdate(req.params.id, {"item": req.body}, {"new": true}, function(err, result) {
      if (err) return res.status(500).send(err);
      else res.send(result);
    });
  },

  delete: function(req, res) {
    Raffle.findByIdAndRemove(req.params.id, function(err, result) {
      if (err) return res.status(500).send(err);
      else res.send(result);
    });
  }
};