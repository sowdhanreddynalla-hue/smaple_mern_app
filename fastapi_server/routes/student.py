from fastapi import APIRouter
from models import Student
from database import students_collection

from bson import ObjectId as objectid

def student_data(student):
    return {
        "id": str(student["_id"]),
        "name": student["name"],
        "email": student["email"],
        "age": student["age"],
        "marks": student["marks"]
    }
student_router = APIRouter(prefix="/student",tags=["student"])
@student_router.get("/getstudents")
def getStudents():
    students = students_collection.find()
    return [student_data(student) for student in students]
@student_router.post("/register")
def register(stu: Student):
    result = students_collection.insert_one(stu.model_dump())
    return {"message": "data inserted "}

@student_router.get("/getparticularstudent/{stuid}")
def getparticularstudent(stuid: str):
    student = students_collection.find_one({"_id": objectid(stuid)})
    return student_data(student)

@student_router.delete("/deletestudent/{stuid}")
def deletestudent(stuid: str):
    result = students_collection.delete_one({"_id": objectid(stuid)})
    return {"message": "data deleted "}
@student_router.put("/updatestudent/{stuid}")
def updatestudent(stuid: str, stu: Student):
    result = students_collection.update_one({"_id": objectid(stuid)}, {"$set": stu.model_dump()})
    return {"message": "data updated "}