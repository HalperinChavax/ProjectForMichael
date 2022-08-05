import axios from "axios"
import { useState, useEffect } from "react"
import { Outlet, Link } from "react-router-dom"

function SubsWatched(props) {

    const [members, setMembers] = useState()

    useEffect(() => {
        getAllMoviesSubs()
    },[])


    async function getAllMoviesSubs() {
        let { data } = await axios.get(`http://localhost:3050/sub/${props.movie}`)
        setMembers(data)
    }

    return <div style={{ border: "3px solid green ", width: "300px", marginBottom: "default" }}>
 <Outlet />
        <h4>Subscriptions Watched</h4>
        {
            members && members.map((member, index) => {
                return <ul  key={index}><li className="link2222"><Link  to='/home/subscriptions/member' state={{ oneMember: member }}>{member.Name}</Link> </li></ul>
            })
        }

    </div>
}

export default SubsWatched