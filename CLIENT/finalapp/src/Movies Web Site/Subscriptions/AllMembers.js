import { useState, useEffect } from "react"
import axios from "axios"
import MemberComp from "./Member"

function AllMembers() {

    const [members, setMembers] = useState([])

    useEffect(() => {
        getAllMembers()
    }, [members])

    async function deleteMember(id) {
       const {data}= await axios.delete(`http://localhost:3050/members/${id}`)
       if(data=="deleted😪"){
        window.location.reload()
        alert("member deleted also from his subscriptions")
       }
    }

    async function getAllMembers() {
        let { data } = await axios.get("http://localhost:3050/members")
        setMembers(data)
    }

    return <div>
        {
            members.map((member, index) => {
                return <div key={index}>< MemberComp member={member} callback={id=>deleteMember(id)} /> </div>
            })
        }
    </div>
}
export default AllMembers