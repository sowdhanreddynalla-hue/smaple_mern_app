import { useState } from "react"
import { useNavigate } from "react-router-dom"
import './PageStyles.css'

function AdminLogin(){
    let [username,setUsername]=useState("")
    let [password,setPassword]=useState("")
    let [error,setError]=useState("")
    let navigate=useNavigate()

    let login=(event)=>{
        event.preventDefault()
        if(username === "admin" && password === "admin"){
            console.log("login success")
            navigate("/adminhome")
        }else{
            console.log("login failed")
            setError("Invalid credentials")
        }
    }

    return(
    <div className="page-shell">
      <div className="form-card">
        <form onSubmit={login}>
          <h2 className="form-heading">Admin Login</h2>
          <div className="form-group">
            <label className="form-label">Username</label>
            <input className="input-field" type="text" value={username} onChange={(e)=>setUsername(e.target.value)} placeholder="Enter username" />
          </div>
          <div className="form-group">
            <label className="form-label">Password</label>
            <input className="input-field" type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Enter password" />
          </div>
          <button className="primary-btn" type="submit">Admin Login</button>
        </form>
        {error && <div className="alert-box">{error}</div>}
      </div>
    </div>
    )
}

export default AdminLogin
