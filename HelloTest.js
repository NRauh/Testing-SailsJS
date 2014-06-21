var request = require("supertest");
var expect = require("chai").expect;
var sails = require("sails");
var app;

before(function(done) {
	sails.lift({
		log: {
			level: "error"
		}
	}, function(err, sails) {
		app = sails.hooks.http.app;
		// Can set up a model
		done();
	});
});

describe("Foo", function() {
	describe("hello", function() {
		it("says hello to a user", function(done) {
			request(app).get("/foo/hello?name=World").end(function(err, res) {
				expect(res.text).to.equal("Hello, World");
				// Could also interact with models here
				done();
			});
		});
	});
});

after(function() {
	// Could destroy created model (would probably want after to be async)
});
