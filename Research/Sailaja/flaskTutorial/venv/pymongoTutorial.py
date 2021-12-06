import pymongo
from pymongo import MongoClient

cluster = MongoClient('mongodb+srv://dbUser:dbUserPassword@cluster0.asgwj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
db = cluster["Tutorial"]
collection = db["test"]

post= ("_id": 0, "name": "tim", "score": 4)
collection.insert_one(post1)

post1 = ("_id": 1, "name": "bill", "score": 5)
post2 = ("_id": 2, "name": "joe", "score": 6)
collection.insert_many([post1, post2])

collection.update_one({"_id":2}, {$set:{"hello":5}})
collection.update_one({"_id":2}, {$inc:{"hello":5}})

results = collection.find({"name": "bill"})
for result : results: 
    print(result)

for result : results: 
    print(result["_id"])


results = collection.find_one({"_id": 0})
print(results)
post_count = collection.count_documents({})
print(post_count)
#results = collection.delete_one({"_id": 0})
#results = collection.delete_many({})