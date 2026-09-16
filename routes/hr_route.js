let express=require("express");
let router=express.Router();
router.get("/viewemployees",(req,res)=>{
    res.send("view employees router");
});

router.post("/assign-task",(req,res)=>{
    res.send("assign-tasks router");
});

router.put("/updatestatus",(req,res)=>{
    res.send("update status router");
});

router.delete("/deleteemployees",(req,res)=>{
    res.send("delete employees router");
});

module.exports=router;
