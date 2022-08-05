import { useSelector } from "react-redux"
import { Outlet, useNavigate } from "react-router-dom"
import EditMember from "./EditMember"

function Subscriptionsomp(){

    const navigate = useNavigate()
    const storeData= useSelector(state => state)


    return <div style={{ border: "3px solid black" }}>
        Subscriptions
        <br></br>
        <button onClick={() => navigate('allMembers')}>All Members</button>
        <button onClick={() => navigate('addMembers')}>Add Members</button>

        {
            storeData[0]!=true ||storeData[0]=="undefined" ?null : <EditMember/>
        }
        
        <Outlet />

    </div>
}
export default Subscriptionsomp