request = require "supertest"
expect = require("chai").expect
sails = require("sails")
app = null

before (done) ->
	sails.lift {
		log: {
			level: "error"
		}
	}, (err, sails) ->
		app = sails.hooks.http.app
		done()
		
describe "Foo", ->
	describe "bar", ->
		it "returns some JSON", (done) ->
			request(app).get("/foo/bar").end((err, res) ->
				expect(res.body.hello).to.equal "World"
				done()
			)
			
after (done) ->
	# stuff to be done
