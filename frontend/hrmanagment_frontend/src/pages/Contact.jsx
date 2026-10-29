import { useState } from "react"
import './PageStyles.css'

function Contact(){
   let [name,setName]=useState("")
   let [age,setAge]=useState(18)
   let [emailid,setEmailid]=useState("")
   let [colname,setColname]=useState("VFSTR")

   let RegisterForm=(event)=>{
    event.preventDefault();
    console.log(name);
   }

   return(
    <div className="page-shell">
      <div className="contact-layout">
        <div className="contact-card">
          <h1 className="page-title">Contact page</h1>
          <form onSubmit={RegisterForm}>
            <div className="form-group">
              <label className="form-label">Name</label>
              <input className="input-field" type="text" value={name} onChange={(event)=>setName(event.target.value)} placeholder="Enter your name" />
            </div>
            <div className="form-group">
              <label className="form-label">Age</label>
              <input className="input-field" type="number" value={age} onChange={(e)=>setAge(e.target.value)} placeholder="Enter your age" />
            </div>
            <div className="form-group">
              <label className="form-label">Email</label>
              <input className="input-field" type="email" value={emailid} onChange={(e)=>setEmailid(e.target.value)} placeholder="Enter your emailid" />
            </div>
            <div className="form-group">
              <label className="form-label">College</label>
              <input className="input-field" type="text" value={colname} onChange={(e)=>setColname(e.target.value)} placeholder="Enter college name" />
            </div>
            <button className="primary-btn" type="submit">Register</button>
          </form>
        </div>

        <div className="contact-card">
          <h2 className="form-heading">Details</h2>
          <ul className="contact-list">
            <li><strong>Name:</strong> {name}</li>
            <li><strong>Age:</strong> {age}</li>
            <li><strong>Email:</strong> {emailid}</li>
            <li><strong>College:</strong> {colname}</li>
          </ul>
        </div>
      </div>
    </div>
   )
}
export default Contact
