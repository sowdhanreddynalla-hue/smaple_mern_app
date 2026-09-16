let express=require("express");
let router=express.Router();
router.post("/register",(req,res)=>{
    res.send("regisstered sucessfully");
});

router.post("/login",(req,res)=>{
    res.send("login sucessfully");
});

router.get("/viewtask",(req,res)=>{
    res.send("view task router");
});

router.put("/updatestatus",(req,res)=>{
    res.send("updatestatus router");
});

module.exports=router;