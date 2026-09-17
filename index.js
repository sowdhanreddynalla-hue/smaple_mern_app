let express=require("express");
let app=express();


let hrroutes=require("./routes/hr_route");
let emprouter=require("./routes/emp_route")
let mongoose=require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/Hrmanagement")
.then(()=>{
    console.log("connected to database")
}).catch((err)=>{
    console.error("Error connecting to database:", err);
});
app.use(express.json());

app.use("/api/hr",hrroutes);
app.use("/api/emp",emprouter);

app.listen(3000,()=>{
    console.log("server listening on port number 3000");
})