request = require "supertest"
expect = require("chai").expect
sails = require "sails"
app = null

before (done) ->
	sails.lift {
		log: {
			level: "error"
		}
	}, (err, sails) ->
		app = sails.hooks.http.app
		# Can set up a model
		done()
		
describe "Foo", ->
	describe "hello", ->
		it "says hello to a user", ->
			request(app).get("/foo/hello?name=World").end((err, res) ->
				expect(res.text).to.equal "Hello, World"
				# Could also interact with models here
			)
			
after ->
	# Could destroy a created model
	# (would probably want after to be async for deleting models)