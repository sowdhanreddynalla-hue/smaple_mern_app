let express=require("express");
let app=express();
let cors=require("cors");
app.use(cors());

let hrroutes=require("./routes/hr_route");
let emprouter=require("./routes/emp_route");
let mongoose=require("mongoose");
mongoose.connect("mongodb://localhost:27017/Hrmanagement")
.then(()=>{
    console.log("connected to mongodb");
    app.listen(3000,()=>{
        console.log("server listening to port number 3000");
    })
}).catch((err)=>{
    console.error("Failed to connect to mongodb:",err);
    process.exitCode=1;
})

app.use(express.json());

app.use("/api/hr",hrroutes);
app.use("/api/emp",emprouter);
