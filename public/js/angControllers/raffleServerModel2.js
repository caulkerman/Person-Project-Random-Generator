var mongoose = require("mongoose");

var RaffleSchema = mongoose.Schema ({
	[object {
		item: { type: Array },
		name: { type: String }
	}]
	
});

var raffleName = "raffle-generator";
module.exports = mongoose.model("raffle-generator", RaffleSchema, raffleName);
