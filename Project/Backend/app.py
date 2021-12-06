from flask import Flask
import pymongo
from pymongo import MongoClient

app = Flask(__name__)

cluster = MongoClient('mongodb+srv://user_name:1234@cluster0.rh9io.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
db = cluster["test"]
collection = db["test"]
post1 = {
    "name": "Sailaja",
    "classes": [
        "CS124", 
        "CS100", 
        "MATH241", 
        "PHYS211", 
        "RHET105", 
        "ENG100"
    ]
}
# collection.insert_one(post1)

# record = { "_id": 5,
#           "name": "Raju",
#           "Roll No": "1005",
#           "Branch": "CSE"}
  
  
  
# Inserting the record1 in the collection 
# by using collection.insert_one()
rec_id1 = collection.insert_one(post1)

@app.route('/addProfile')
def get_Classes():
    #studentInfo = collection.find(studentName)
    return 'Hello world!'