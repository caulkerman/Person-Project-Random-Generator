var mongoose = require("mongoose");

var RaffleSchema = mongoose.Schema ({
	// console.log(RaffleSchema);
	item: { type: Array },
	name: { type: String }
});

var raffleName = "raffle-generator";
module.exports = mongoose.model("raffle-generator", RaffleSchema, raffleName);
