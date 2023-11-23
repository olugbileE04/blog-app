import { Link } from "react-router-dom"
import "./topbar.css"

export default function TopBar() {
  const user = false;
  return (
    <div className="top">
        <div className="topLeft">
          <i className="topIcon fa-brands fa-square-facebook"></i>
        <i className="topIcon  fa-brands fa-square-twitter"></i>
        <i className="topIcon fa-brands fa-square-pinterest"></i>
        <i className="topIcon fa-brands fa-square-instagram"></i>
        
        </div>
        <div className="topCenter">
            <ul className="topList">

               <li className="topListItem"><Link className="link" to="/" >HOME</Link>
               </li>
                <li className="topListItem"><Link className="link" to="/settings" >SETTINGS</Link></li>
                <li className="topListItem"><Link className="link" to="/singlePost" >SINGLEPOST</Link></li>
                <li className="topListItem"><Link className="link" to="/write" >WRITE</Link></li>
                <li className="topListItem">{user && "LOGOUT"}</li>
            </ul>
        </div>
        <div className="topRight">
          {
            user? (
<img className="topImg"src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            ):(
              <ul className="topList">
              <li className="topListItem"><Link className="link" to="/login">LOGIN</Link></li>
              <li className="topListItem"><Link className="link" to="/register">REGISTER</Link></li>
              </ul>
            )
          }
            
            <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
        </div>
    </div>
  )
}
