import { useState } from "react"
import { useNavigate } from "react-router-dom"
import './PageStyles.css'

function Login(){
    let [email,setEmail]=useState("")
    let [password,setPassword]=useState("")
    let navigate=useNavigate()

    let handleLogin=async(event)=>{
       event.preventDefault()
       if(email === "admin@gmail.com" && password === "admin"){
           localStorage.setItem("currentuser", JSON.stringify({name: "admin", role: "admin"}))
           navigate("/adminhome")
       }else{
          let req=await fetch("http://localhost:3000/api/emp/login", {
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({email,password})
          });
          let data=await req.json();
          console.log(data)

          if(data.user){
            if(data.user.role === "HR"){
              localStorage.setItem("currentuser", JSON.stringify(data.user));
              navigate("/hrhome")
            }else{
              localStorage.setItem("currentuser", JSON.stringify(data.user));
              navigate("/emphome")
            }
          }
       }
    }

    return(
    <div className="page-shell">
      <div className="form-card">
        <h1 className="form-heading">Login</h1>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label className="form-label">Email</label>
            <input className="input-field" type="email" onChange={(e)=>setEmail(e.target.value)} value={email} placeholder="Enter Emailid" />
          </div>
          <div className="form-group">
            <label className="form-label">Password</label>
            <input className="input-field" type="password" onChange={(e)=>setPassword(e.target.value)} value={password} placeholder="Enter password" />
          </div>
          <button className="primary-btn" type="submit">Login</button>
        </form>
      </div>
    </div>)
}
export default Login
