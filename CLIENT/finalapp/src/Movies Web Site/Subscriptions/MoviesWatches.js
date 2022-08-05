import axios from "axios"
import { useState, useEffect } from "react"
import { Outlet, Link } from "react-router-dom"
import SubNewMovie from "./SubNewMovie"

function MoviesWatches(props) {

    const [moviesWatched, setMoviesWatched] = useState()
    const [isSub, setIsSub] = useState(false)


    useEffect(() => {
        getAllMembersSubs()
    }, [])


    async function getAllMembersSubs() {
        let { data } = await axios.get(`http://localhost:3050/members/${props.member._id}`)
        setMoviesWatched(data)
       
    }

    return <div style={{ border: "3px solid green ", width: "300px", marginBottom: "default" }}>

        <h4>Movies Watched</h4>
        <button onClick={() => setIsSub(true)}>Subscribe To A New Movie</button>
        {
            moviesWatched && moviesWatched.map((movie, index) => {
                if (movie != null) {
                    return <ul key={index}><li> <Link className="link2222" to='/home/movies/allMovies' state={{ oneMovie: movie }} >{movie.Name}</Link>,
                        {movie.YearPremiered}</li></ul>
                }
            })
        }
        {
            isSub && <SubNewMovie member={props.member} moviesWatched={moviesWatched}/>
        }


    </div>

}

export default MoviesWatches

