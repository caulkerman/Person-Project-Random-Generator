var mongoose = require("mongoose");

var RaffleSchema = new mongoose.Schema ({
	// console.log(RaffleSchema);
	name: { type: String },
	item: { type: Array }
});

var raffleName = "raffle-generator";
module.exports = mongoose.model("raffle-generator", RaffleSchema, raffleName);
