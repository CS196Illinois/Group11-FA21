from flask import flask
import pymongo
from pymongo import MongoClient

app = Flask(__name__)

cluster = MongoClient('mongodb+srv://user_name:1234@cluster0.rh9io.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
db = cluster["test"]
collection = db["test"]

@app.route('/addProfile')
def hello_world():
    return 'Hello world!'