var mongoose = require("mongoose");

var RaffleSchema = mongoose.Schema ({
	[object {
		item: { type: Array },
		name: { type: String }
	}]
	
});

var raffleName = "raffle-generator";
module.exports = mongoose.model("raffle-generator", RaffleSchema, raffleName);

//for password
var RaffleSchema = mongoose.Schema ({
	
		item: { type: String, required: true },
		name: { type: String, required: true }
	
});


////controller
var User = reequire(file/path/name/file.js);

modulew.exports = {
	{new user: function (req, res) {
			var user = new User(req.body);
			user.save(funcrtion(err, results) {
				if (err) res.status(500).json(err);
				else res.json(results);
			})
	}
}

//in the html page you can use html's <form> to creatge username and password stuff.  Angular has form control directive built in to authenticate your inputs