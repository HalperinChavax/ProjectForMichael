import axios from "axios"
import { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"

function EditMovie() {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const storeData = useSelector(state => state)
    const [movie, setMovie] = useState({})
    const [value, setValue] = useState({Name:storeData[1].Name,Genres:storeData[1].Genres,ImageUrl:storeData[1].ImageUrl,YearPremiered:storeData[1].YearPremiered})
    const [isValue,setIsValue]=useState(true)

    function handleInput(e) {
        setIsValue(false)
        setMovie({ ...movie, [e.target.name]: e.target.value })
        isValue? setValue(movie):setValue({})
    }

    async function updateMovie() {
        const {data} = await axios.put(`http://localhost:3050/movies/${storeData[1]._id}`, movie)
            alert(data)        
     
    }

    function cancel() {
        dispatch({ type: "CANCEL" })
        navigate("allMovies")
    }


    return <div style={{ border: "2px solid black ", width: "400px", height: "300px" }}>
        <h2>Edit Movie:{storeData[1].Name}</h2>
        Name:<input type="text" name="Name" value={isValue?value.Name:movie.Name}  onChange={handleInput}></input><br />
        Genres:<input type="text" name="Genres" value={isValue?value.Genres:movie.Genres} onChange={handleInput}></input><br />
        Image Url:<input type="text" name="ImageUrl" value={isValue?value.ImageUrl:movie.ImageUrl} onChange={handleInput}></input><br />
        Premired:<input type="text" name="YearPremiered" value={isValue?value.YearPremiered:movie.YearPremiered} onChange={handleInput}></input><br />

        <button onClick={updateMovie}>Update</button>
        <button onClick={cancel}>Cancel</button>
    </div>

}
export default EditMovie