from pymongo import MongoClient
import os
from dotenv import load_dotenv
load_dotenv()

client = MongoClient(os.getenv("MONGO_URL"))
#create a database called "mydatabase"
db=client["vigan"]
students_collection=db["student"]
staff_collection=db["staff"]