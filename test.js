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
		done();
	});
});

describe("Foo", function() {
	describe("bar", function() {
		it("returns some JSON", function(done) {
			request(app).get("/foo/bar").end(function(err, res) {
				expect(res.body.hello).to.equal("World");
				done();
			});
		});
	});
});

after(function(done) {
	// stuff to be done
});
