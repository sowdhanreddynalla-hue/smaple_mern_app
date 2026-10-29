import { Link } from "react-router-dom";
import './Header.css'
import { useLocation,useNavigate } from "react-router-dom";
function Header(){
   
  let currentuser=JSON.parse(localStorage.getItem("currentuser") ||"null")
  useLocation(); //reload the menu bar
  let navigate=useNavigate()
  let handleLogout=(e)=>{
    localStorage.removeItem("currentuser")
    navigate("/login");
  }
     return(
        <div className="header">
      {/* common menus */}
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>  
   
      {/* if the user is not logged in */}
        {!currentuser && (
          <div>
           <Link to="/login">login</Link>
          <Link to ="/register">Register</Link>   
        </div>
         )}
       {/* if hr logged in    */}
       {currentuser && currentuser.role=="HR" && (
        <div>
          <Link to="#">Assign task</Link>
          <Link to="#">View employees</Link>
          <button onClick={handleLogout}>Logout</button>
        </div>
       )}

       {/* if emp logged in */}
         {currentuser && currentuser.role=="EMPLOYEE" &&(
          <div>
              <Link to="#">View task</Link>
          <Link to="#">Add Todo</Link>
          <button onClick={handleLogout}>Logout</button>
            </div>
         )}
       {/* if admin logged in  */}
       {currentuser && currentuser.role=="admin" &&(
          <div>
              <Link to="#">View Employees</Link>
          <Link to="#">view tasks</Link>
          <button onClick={handleLogout}>Logout</button>
            </div>
         )}
        </div>
    )
}
export default Header;