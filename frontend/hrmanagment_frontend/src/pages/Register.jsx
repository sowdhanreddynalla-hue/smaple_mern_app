import {useState} from 'react';
import './PageStyles.css'

function Register()
{
  let [name,setName]=useState("");
  let [email,setEmail]=useState("");
  let [password,setPassword]=useState("");
  let [role,setRole]=useState("");

  let handleRegister=async(event)=>{
    event.preventDefault();
    let req=await fetch("http://localhost:3000/api/emp/register",
        {
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({name,email,password,role})
        });
    let data=await req.json();
    if(req.ok){
        console.log("Data inserted success");
        console.log(data);
    }else{
        console.log("Data insertion failed");
        console.log(data);
    }
  }

    return(
      <div className="page-shell">
        <div className="form-card">
          <h1 className="form-heading">Register</h1>
          <form onSubmit={handleRegister}>
            <div className="form-group">
              <label className="form-label">Name</label>
              <input className="input-field" type="text" onChange={(event)=>setName(event.target.value)} value={name} placeholder="Enter name" />
            </div>
            <div className="form-group">
              <label className="form-label">Email</label>
              <input className="input-field" type="email" onChange={(event)=>setEmail(event.target.value)} value={email} placeholder="Enter emailid" />
            </div>
            <div className="form-group">
              <label className="form-label">Password</label>
              <input className="input-field" type="password" onChange={(event)=>setPassword(event.target.value)} value={password} placeholder="Enter password" />
            </div>
            <div className="form-group">
              <label className="form-label">Role</label>
              <select className="select-field" onChange={(event)=>setRole(event.target.value)} value={role}>
                  <option value="">Choose role</option>
                  <option value="HR">HR</option>
                  <option value="EMPLOYEE">EMPLOYEE</option>
              </select>
            </div>
            <button className="primary-btn" type="submit">Register</button>
          </form>
        </div>
      </div>
    )
}
export default Register
