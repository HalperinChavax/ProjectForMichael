import axios from "axios"
import { Outlet, useNavigate, useLocation } from "react-router-dom"
import { useDispatch } from "react-redux"
import SubsWatched from "./SubsWatched"


function MovieComp(props) {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    

    function edit() {
        navigate(-1)
        dispatch({ type: "EDIT", payload: props.movie })
    }


    return <div style={{ "border": "4px solid red" }}  >
        <Outlet />

        <b>{props.movie.Name}</b><br />
        {props.movie.YearPremiered}<br />
         <img src={props.movie.ImageUrl} width="300px" height="300px" float="right " position="right"></img><br />
        {/* Genres:{`"${movie.Genres[0]}", "${movie.Genres[1]}", "${movie.Genres[2]}"`} */}
        {<SubsWatched movie={props.movie._id} float="left" position="right"/>} 

        <button onClick={edit}>Edit</button>
        <button onClick={()=>props.callback(props.movie._id)}>Delete</button>
    </div>
}
export default MovieComp
