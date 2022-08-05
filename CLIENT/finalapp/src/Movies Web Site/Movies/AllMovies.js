import axios from "axios"
import { useEffect, useState } from "react"
import MovieComp from "./Movie"
import { useSelector } from "react-redux"
import {useLocation} from "react-router-dom"

function AllMovies() {

    const location = useLocation()
    const { oneMovie } = location.state ? location.state : ""
    
    const storeData = useSelector(state => false)
    const [movies, setMovies] = useState([])
    const [name, setName] = useState()
    const [moviesToShow, setMoviesToShow] = useState([])

   
    useEffect(() => {
        getAllMovies()
    }, [movies])

    async function getAllMovies() {
        let { data } = await axios.get("http://localhost:3050/movies")
        setMovies(data)
        setMoviesToShow(movies)

    }

    function findMovieFunc() {
        const filteredMovies = movies.filter(mov => String(mov.Name).includes(name))
        setMoviesToShow([...filteredMovies])
    }

    async function deleteMovie(id) {
        console.log("here in delete"+id);
        const {data} = await axios.delete(`http://localhost:3050/movies/${id}`)
        console.log("data"+data);
        if (data == "Movie deleted🤔") {
        console.log("data 2",data);

            const temp = movies.filter(mv => mv._id != id)
            setMovies([...temp])
            alert("movie deleted")
        }
    }


    return <div>
        <span>Find Movie: </span><input type="text" onChange={e => setName(e.target.value)}></input>
        <button onClick={findMovieFunc}>Find</button>
        {
            storeData ? null :
                moviesToShow.map((movie, index) => {
                    return <div key={index}><MovieComp movie={movie} callback={id => deleteMovie(id)} /> </div>
                })
        }

    </div>


}
export default AllMovies