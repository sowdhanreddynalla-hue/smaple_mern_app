import { useState } from "react";
function Contact() {
  let [name, setName] = useState("")
  let [age, setAge] = useState("18")
  let [emailid, setEmailid] = useState("") 
  let [colname,setColname]=useState("VFSTR")
  let RegisterForm=(event) =>{
    event.preventDefault();
    console.log(name);
  }

  return (
    <div>
      <h1>Contact Page called</h1>
    <form onSubmit={RegisterForm}>
      <input type="text" value={name} onChange={(event) => setName(event.target.value)} placeholder="Name"></input>
      <br/>
      <input type="number" value={age} onChange={(event) => setAge(event.target.value)} placeholder="enter your age"></input>
      <br/>
      <input type="email" value={emailid} onChange={(event) => setEmailid(event.target.value)} placeholder="enter your email"></input>
      <br/>
      <input type="text" value={colname} onChange={(event) => setColname(event.target.value)} placeholder="enter your college name"></input>
      <br/>
      <button type="submit" value="submit">register</button>
      <br/>
    </form>
    <p>{name}</p>
    <p>{age}</p>
    <p>{emailid}</p>
    <p>{colname}</p>
    </div>
  );
}
export default Contact