import "./sidebar.css"

export default function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebarItem">
            <span className="sidebarTitle">ABOUT ME</span>
            <img className="sideImg" src="https://images.unsplash.com/photo-1631651738795-b89313eb68d0?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. A quasi consequuntur molestiae, odio reprehenderit numquam iusto omnis eos dignissimos laborum possimus aliquid quidem, facilis tempore unde, veritatis id recusandae earum.</p>
           
        </div>
        <div className="sidebarItem">
            <span className="sidebarTitle">CATERGORIES</span>
            <ul className="sidebarList">
                <li className="sidebarListItem">Life</li>
                <li className="sidebarListItem">Travel</li>
                <li className="sidebarListItem">Music</li>
                <li className="sidebarListItem">Food</li>
                <li className="sidebarListItem">Sports</li>
                <li className="sidebarListItem">Tech</li>

            </ul>
            <div className="sidebarItem">
                <span className="sidebarTitle">FOLLOW US</span>
                <div className="sidebarSocial">
                    <i className="sidebarIcon fa-brands fa-facebook"></i>
                    <i className="sidebarIcon fa-brands fa-instagram"></i>
                    <i className="sidebarIcon fa-brands fa-twitter"></i>
                    <i className="sidebarIcon fa-brands fa-pinterest"></i>
                </div>
            </div>
        </div>
    </div>
  )
}
