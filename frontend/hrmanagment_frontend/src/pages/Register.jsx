import {useState} from 'react';


function register() {
    let [name,setName]=useState("");
    let [email,setEmail]=useState("");
    let [password,setPassword]=useState("");
    let [role,setRole]=useState("");
    let handleregister=async(event)=>{
        event.preventDefault();
        let req=await fetch("http://localhost:3000/api/emp/register",
            {method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({name,email,password,role})});
            let data=await req.json();
            if(req){
                console.log("data saved successfully");
                console.log(data);

            }else{
                console.log("data not saved");
                console.log(data);
            }



    }
    return (
        <div>
            <h1>Register</h1>
            <form onSubmit={handleregister}>
                <input type="text" onChange={(event)=>setName(event.target.value)} value={name} placeholder="Name" ></input><br/>
                <input type="email" onChange={(event)=>setEmail(event.target.value)} value={email} placeholder="Email" ></input><br/>
                <input type="password" onChange={(event)=>setPassword(event.target.value)} value={password} placeholder="Password" ></input><br/>
                <select onChange={(event)=>setRole(event.target.value)} value={role}>


                    <option value="">choose role</option>
                    <option value="HR">HR</option>
                    <option value="EMPLOYEE">EMPLOYEE</option>
                </select><br/>
                <button type="submit">Register</button>
            </form>
        </div>
    )
}

export default register;