import "./settings.css"
import Sidebar from "../../sidebar/Sidebar"

export default function Settings() {
  return (
    <div className="settings">
        <div className="settingsWrapper">
        <div className="settingsTitle">
            <span className="settingsUpdateTitle">Update Your Account</span>
            <span className="settingsDeleteTitle">Delete Your Account</span>
        </div>
        <form className="settingsForm">
            <label>Profile Picture</label>
           <div className="settingPP">
            <img src="https://images.unsplash.com/photo-1521856729154-7118f7181af9?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            <label htmlFor="fileInput">
            <i className="settingsPPIcon fa-solid fa-user"></i>
            </label>
            <input type="file" id="fileInput"  style={{display:"none"}}/>
            
            
            <div className="settingsForm"> 
                <label>Username</label>
                <input type="text" placeholder="" />
                <label>Email</label>
                <input type="text" placeholder="" />
                <label>Password</label>
                <input type="password" placeholder="password" />
                <button className="settingsSubmit">Update</button>
            </div>
    </div>
        </form>
        </div>
        <Sidebar />
    </div>
  )
}
