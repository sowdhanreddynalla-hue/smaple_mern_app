let express=require("express");
let router=express.Router();
let bcrypt=require('bcrypt');
let {users}=require("../models/users");

router.post("/register",async (req,res)=>{
    const {name,email,password,role}=req.body;
    if(!name || !email || !password || !role){
        return res.status(400).json({message:"Name, email, password, and role are required."});
    }

    if(!["HR","EMPLOYEE"].includes(role)){
        return res.status(400).json({message:"Role must be HR or EMPLOYEE."});
    }

    try{
        const hashedPassword=await bcrypt.hash(password,10);
        const newuser=await users.create({name,email,password:hashedPassword,role});
        res.status(201).json({
            id:newuser._id,
            name:newuser.name,
            email:newuser.email,
            role:newuser.role
        });
    }catch(error){
        if(error.code===11000){
            return res.status(409).json({message:"An account with this email already exists."});
        }

        console.error("Failed to register user:",error);
        res.status(500).json({message:"Registration failed. Please try again later."});
    }
});

router.post("/login",async (req,res)=>{
    const {email,password}=req.body || {};
    if(!email || !password){
        return res.status(400).json({message:"Email and password are required."});
    }

    try{
        const result=await users.findOne({email});
        if(!result || !(await bcrypt.compare(password,result.password))){
            return res.status(401).json({message:"Invalid email or password."});
        }

        return res.json({
            message:"Login successful",
            user:{
                _id:result._id,
                name:result.name,
                email:result.email,
                role:result.role
            }
        });
    }catch(error){
        console.error("Failed to log in user:",error);
        return res.status(500).json({message:"Login failed. Please try again later."});
    }
});

router.get("/viewtask",(req,res)=>{
    res.send("view page called");
});

router.put("/updatestatus",(req,res)=>{
    res.send("updatestatus page called");
});


router.patch("/updateprofile/:id",async (req,res)=>{
    let data=req.body;
    if(data.password){
        data.password=await bcrypt.hash(data.password,10);
    }
    let result=await users.findByIdAndUpdate(req.params.id,data,{new:true});
    res.send(result);
})

module.exports=router;
