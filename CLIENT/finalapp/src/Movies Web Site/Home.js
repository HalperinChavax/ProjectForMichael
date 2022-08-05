import { Outlet, useNavigate } from "react-router-dom"



function HomeComp() {
    
    const navigate = useNavigate()


    return <div >
        <button onClick={()=>navigate("movies")}>Movies</button>
        <button onClick={()=>navigate("subscriptions")}>Subscriptions</button>
        <button>User Management</button>
        <button onClick={()=>navigate("/")}>Log Out</button>


  {/* <a className="active" onClick={()=>navigate("/")}>Home</a>
  <a></a>
  <a onClick={()=>navigate("movies")}>Movies</a>
  <a onClick={()=>navigate("subscriptions")}>Subscriptions</a>
  <a >User Management</a>
  <a >Log Out</a> */}

        <Outlet/>
    </div>
}
export default HomeComp