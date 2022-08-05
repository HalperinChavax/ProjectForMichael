import axios from "axios"
import { useEffect, useState } from "react"
import MovieComp from "./Movie"
import { useSelector } from "react-redux"
import { useLocation } from "react-router-dom"


function AllMovies() {

    const storeData = useSelector(state => false)
    const [movies, setMovies] = useState([])
    const [name, setName] = useState()
    const [moviesToShow, setMoviesToShow] = useState([])
    const location = useLocation()
    const { oneMovie } = location.state ? location.state : ""

    useEffect(() => {
        getAllMovies()
    }, [movies])


    async function getAllMovies() {
        let { data } = await axios.get("http://localhost:3050/movies")
        setMovies(data)
        setMoviesToShow(movies)
        if (location.state !== null) {
            findMovieFunc()
        }
    }

    function findMovieFunc() {
        if (location.state !== null) {
            setName(oneMovie.Name)
        }
        const filteredMovies = movies.filter(mov => String(mov.Name).includes(name))
        setMoviesToShow([...filteredMovies])
    }


    function handleClick(e) {
        setName(e.target.value)
        findMovieFunc()
    }


    async function deleteMovie(id) {
        const { data } = await axios.delete(`http://localhost:3050/movies/${id}`)
        if (data == "Movie deleted🤔") {

            const temp = movies.filter(mv => mv._id != id)
            setMovies([...temp])
            alert("movie deleted")
        }
    }



    return <div>
        <span>Find Movie: </span><input type="text" onChange={handleClick}></input>
        {/* <button onClick={findMovieFunc}>Find</button>העדפתי לעשות את החיפוש על המקום שיתחיל לחפש מה שמתאים*/}
        {
            storeData ? null :
                moviesToShow.map((movie, index) => {
                    return <div key={index}><MovieComp movie={movie} callback={id => deleteMovie(id)} /> </div>
                })
        }

    </div>


}
export default AllMovies