import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

function AddMembers() {

    const navigate = useNavigate()
    const [member, setMember] = useState({})

    const handleInput = (e) => {
        setMember({ ...member, [e.target.name]: e.target.value })
    }

    const addMember = async () => {
        let data = await axios.post(`http://localhost:3050/members`, member)
        if (data.status == 200) {
            alert("member inserted succesfully")
        } else {
            alert("there is a problem")
        }
    }

    return <div>
        <h2>AddMembers</h2>
        Name:<input type="text" name="Name" onChange={handleInput}></input><br />
        City:<input type="text" name="City" onChange={handleInput}></input><br />
        Email:<input type="text" name="Email" onChange={handleInput}></input><br />

        <button onClick={addMember}>Save</button>
        <button onClick={() => navigate("/home/subscriptions/allMembers")}>Cancel</button>
        
    </div>
}
export default AddMembers
