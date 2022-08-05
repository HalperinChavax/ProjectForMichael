import { useSelector } from "react-redux"
import axios from "axios"
import { useState } from "react"
import { Outlet, useNavigate } from "react-router-dom"
import MovieComp from "./Movie"
import EditMovie from "./EditMovie"



function Moviesomp() {

    const navigate = useNavigate()
    const storeData = useSelector(state => state)


    return <div style={{ border: "5px solid black", width:"100%" }}>
        <h2>Movies</h2>
        <br></br>
        <button onClick={() => navigate('allMovies')} hidden={storeData[0]}>All Movies</button>
        <button onClick={() => navigate('addMovie')} hidden={storeData[0]}>Add Movie</button>

        {
            storeData[0] != true || storeData[0] == "undefined" ? null : <EditMovie />
        }

        <Outlet />

    </div>
}
export default Moviesomp