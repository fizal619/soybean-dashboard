# Other libs
import 		json
import 		twitter

# Create an instance of flask, for some reason 
# flask doesn't use app.listen() anymore? 
# TODO: Read up on how to deploy flask app in 
# late 2016
from flask import Flask, jsonify
app = Flask(__name__, static_url_path='/static')

###############################################
# Making an in-memory queue to store the tweet
# timeline once the server is up.This helps 
# solve the problem of multiple clients tapping 
# same data. 

class TWEETS:
	def __init__(self):
	  self.items = []
	  self.limit = 20 # 20 tweets to keep in memory

	def isEmpty(self):
	  return self.items == []

	def enqueue(self, item):
	  self.items.insert(0,item)

	def dequeue(self):
		return self.items.pop()

	def size(self):
	  return len(self.items)

# init 

tweets = TWEETS()
																							#
																							#
###############################################

###############################################
# Init Twitter API Wrapper -
# Populates the queue also with soybean queries. 
#
#
def loadCreds(fileName):	
	with open(fileName) as json_data:
		d = json.load(json_data)
		return d

creds = loadCreds('creds.json')

api = twitter.Api(	consumer_key 				= creds['consumer_key'],
                    consumer_secret			= creds['consumer_secret'],
                    access_token_key		= creds['access_token_key'],
                    access_token_secret	= creds['access_token_secret'])
# print('########################################')
# print('Testing creds for twitter:\n')
# print(api.VerifyCredentials()) 
# print('########################################')

print('########################################')
print('Loading the queue:\n')

# print(results)
print('########################################')

																							#
																							#
###############################################



###############################################
# TEST ROUTE -
# Used to test the data coming back from the 
# twitter api in postman. 
@app.route('/api/v1/test/search')
def index():
	results = api.GetSearch(
    raw_query="q=%23soybean&count=20")
	return results[0].AsJsonString()

																							#
																							#
###############################################



###############################################
# DEFAULT ROUTE - 
# Any request that comes in /* is routed to 
# this catch-all function that serves react.
# Defining specific routes above this should 
# be fine. 
@app.route('/', defaults={'path': ''})			 
@app.route('/<path:path>')									 
def catch_all(path):												 		
    return app.send_static_file('index.html')#
    																				 #
##############################################

