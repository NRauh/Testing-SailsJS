module.exports = {
	bar: function(req, res) {
		res.json({hello: "World"});
	},
	
	hello: function(req, res) {
		var addressed = req.param("name");
		
		res.send("Hello, "+addressed);
	}
};

