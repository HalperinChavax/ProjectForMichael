import axios from "axios"
import { useEffect, useState } from "react"


function SubNewMovie(props) {

    const [sub, setSub] = useState({ id: props.member._id ,Name:"",Date:"" })
    const [movies, setMovies] = useState([])

    useEffect(() => {
        getAllMovies()
    }, [movies])

    const getAllMovies = async () => {
        const {data} = await axios.get(`http://localhost:3050/movies`)
        // props.moviesWatched.forEach(movieWatched => {
        //     const index=data.findIndex(movie=>movie._id==movieWatched._id)
        //     data.splice(index,1)
        // })
        setMovies(data)
    }



    function handleInput(e) {
        setSub({ ...sub, [e.target.name]: e.target.value })
        getMovieByName()
    }

    const getMovieByName = async () => {
        const selescted = (document.getElementById("id")).value;
        setSub({ ...sub, Name: selescted })
    }



    async function subscribe() {
        if (sub.Date == "undefined") {
            alert("please enter a date")
        } else if (sub.Name == "undefined") {
            alert("please enter a movie name")
        }
        else {
            let { data } = await axios.post(`http://localhost:3050/sub`, sub)
            alert(data)
        }
    }

    return <div style={{ border: "2px solid red" }} >
        Add a new movie<br />
        <select id="id" multiple size="1">
            {
                movies.map((movie, index) => {
                    return <option value={movie.Name} key={index}>{movie.Name}</option>
                })
            }
        </select>

        <input type="date" name="Date" onChange={handleInput}></input>
        <button onClick={subscribe}>subscribe</button>
    </div>

}
export default SubNewMovie


