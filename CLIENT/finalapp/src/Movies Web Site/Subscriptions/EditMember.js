import axios from "axios"
import { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"

function EditMember() {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const storeData = useSelector(state => state)
    const [member, setMember] = useState({})
    const [value, setValue] = useState({Name:storeData[1].Name,City:storeData[1].City,Email:storeData[1].Email})

    const handleInput = (e) => {
        setMember({ ...member, [e.target.name]: e.target.value })
        setValue(member)
    }

    async function updateMember() {
        let { data } = await axios.put(`http://localhost:3050/members/${storeData[1]._id}`, member)
        alert(data)
    }

    function cancel() {
        dispatch({ type: "CANCEL" })
        navigate(1)
    }

    return <div style={{ border: "2px solid black ", width: "400px", height: "300px" }}>
        <h2>Edit Member:  {storeData[1].Name} </h2>

        Name:<input type="text" name="Name" value={value.Name} onChange={handleInput}></input><br />
        City:<input type="text" name="City" value={value.City} onChange={handleInput}></input><br />
        Email:<input type="text" name="Email" value={value.Email} onChange={handleInput}></input><br />

        <button onClick={updateMember}>Update</button>
        <button onClick={cancel}>Cancel</button>
    </div>


}
export default EditMember