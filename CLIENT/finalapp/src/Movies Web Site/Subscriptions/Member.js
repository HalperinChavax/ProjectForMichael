import axios from "axios"
import { useNavigate ,useLocation} from "react-router-dom"
import MoviesWatches from "./MoviesWatches"
import { useDispatch } from "react-redux"
import AllMembers from "./AllMembers"


function MemberComp(props) {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const location = useLocation()
    const { oneMember } = location.state ? location.state : ""
    let member = {}

    if (oneMember) {
        member = { ...oneMember }
    } else {
        member = { ...props.member }
    }

    function edit() {
        navigate(-1)
        dispatch({ type: "EDIT", payload: props.member })
    }


    return <div style={{ "border": "4px solid red" }}  >
        
        <h3>{member.Name}</h3>
        <h3>{member.Email}</h3>
        <h3>{member.City}</h3>

        <button onClick={edit}>Edit</button>
        <button onClick={()=>props.callback(member._id)}>Delete</button>
       <MoviesWatches member={member} />
       

    </div>
}
export default MemberComp