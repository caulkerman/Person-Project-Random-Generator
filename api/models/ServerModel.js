var mongoose = require('mongoose');

var RandomSchema = mongoose.Schema ({
  name: { type: String },
  item: { type: Array }
  });

// var Random = mongoose.model('BloomTooth', sightingSchema);

// // make this available to our users in our Node applications
// module.exports = Sighting;

var collectionName = "random-generator";
module.exports = mongoose.model("random-generator", RandomSchema, collectionName);


