import { Routes, Route } from "react-router-dom"
import HomeComp from "./Home"
import LogInComp from "./LogIn"
import Moviesomp from "./Movies/Movies"
import AllMovies from "./Movies/AllMovies"
import AddMovie from "./Movies/AddMovie"
import EditMovie from "./Movies/EditMovie"
import SubscriptionsComp from "./Subscriptions/Subscriptions"
import AddMembers from "./Subscriptions/AddMembers"
import AllMembers from "./Subscriptions/AllMembers"
import MovieComp from "./Movies/Movie"
import MemberComp from "./Subscriptions/Member"
import { Outlet, useNavigate } from "react-router-dom"

function MainComp() {
    
    // const navigate = useNavigate()
    return <div>
         <h1>Movies Subscriptions Web Site</h1><br/>

    {/* <div className="topnav">
       
    <a className="active" onClick={()=>navigate("/")}>Home</a>
    <a></a>
    <a onClick={()=>navigate("home/movies")}>Movies</a>
    <a onClick={()=>navigate("home/subscriptions")}>Subscriptions</a>
    <a >User Management</a>
    <a >Log Out</a>
   </div> */}
        
        <Routes>
            <Route path="/" element={<LogInComp />} />
            <Route path="/home" element={<HomeComp />} >

                <Route path="movies" element={<Moviesomp />}>
                    <Route path="movie" element={<MovieComp />} />
                    <Route path="addMovie" element={<AddMovie />} />
                    <Route path="allMovies" element={<AllMovies />} />
                    <Route path="editMovie" element={<EditMovie />} />
                </Route>

                <Route path="subscriptions" element={<SubscriptionsComp />} >
                <Route path="member" element={<MemberComp/>} />
                    <Route path="allMembers" element={<AllMembers />} />
                    <Route path="addMembers" element={<AddMembers />} />
                </Route>
            </Route>
            <Route path="/home/movies/movie" element={<MovieComp />} />

        </Routes>
 </div>
}
export default MainComp