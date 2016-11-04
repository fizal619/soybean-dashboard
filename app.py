# Create an instance of flask, for some reason 
# flask doesn't use app.listen() anymore? 
# TODO: Read up on how to deploy flask app in 
# late 2016
from flask import Flask
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

