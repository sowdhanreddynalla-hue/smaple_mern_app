from fastapi import APIRouter
from models import Staff
from database import staff_collection
staff_router = APIRouter(prefix="/staff",tags=["staff"])
#localhost:8000/staff/getstaff
@staff_router.get("/getstaff")
def getstaffs():
    return "get staff method called"
#localhost:8000/staff/addstaff
@staff_router.post("/addstaff")
def addstaff(staff: Staff):
    return "add staff method called"