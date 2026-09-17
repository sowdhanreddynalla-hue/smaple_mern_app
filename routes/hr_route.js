let express=require('express');
let router=express.Router();

router.get("/viewemployees",(req,res)=>{
    res.send("view employees route");   
});
router.post("/addemployee",(req,res)=>{
    res.send("add employee route");
});
router.get("/viewemployee/:id",(req,res)=>{
    res.send("view employee route");
});
router.delete("/deleteemployee/:id",(req,res)=>{
    res.send("delete employee route");
});
module.exports=router;
