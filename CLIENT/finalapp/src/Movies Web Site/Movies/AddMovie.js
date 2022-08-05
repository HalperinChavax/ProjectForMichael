import { useState } from "react"
import axios from "axios"
import { Outlet, useNavigate } from "react-router-dom"

function AddMovie() {

    const navigate = useNavigate()
    const [newMovie, setNewMovie] = useState({})

    const handleInput = (e) => {
        setNewMovie({ ...newMovie, [e.target.name]: e.target.value })
    }

    const addMovie = async () => {
        let data = await axios.post(`http://localhost:3050/movies`, newMovie)
        if (data.status == 200) {
            alert("movie inserted succesfully")
        }else {
            alert("there is a problem")
        }
    }

    return <div style={{ border: "2px solid black ", width: "300px", height: "300px" }}>
        <Outlet />

        <h2>Add Movie</h2>
        Name:<input type="text" name="Name" onChange={handleInput}></input><br />
        Genres:<input type="text" name="Genres" onChange={handleInput}></input><br />
        Image Url:<input type="text" name="ImageUrl" onChange={handleInput}></input><br />
        Premired:<input type="text" name="YearPremiered" onChange={handleInput}></input><br />
        <button onClick={addMovie}>Save</button>
        <button onClick={() => navigate("/home/movies/allMovies")}>Cancel</button>

    </div>
}
export default AddMovie