import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import ".././Movies Web Site/Login.css"

export default function LogInComp() {

    const navigate = useNavigate()
    const [user, setUser] = useState()

    const handleInput = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    const authintication = async () => {
        let { data } = await axios.post(`http://localhost:3050/auth`, user)
        if (data == 'not existed') {
            alert("not existed")
        } else if (data == 'hello undefined') {
            alert('please enter details')
        }
        else {
            navigate('/home')
        }
    }

    return <div className="login-wrap">
    <div className="login-html">
      <input id="tab-1" type="radio" name="tab" className="sign-in" /><label htmlFor="tab-1" className="tab">Sign In</label>
      <input id="tab-2" type="radio" name="tab" className="sign-up"/><label htmlFor="tab-2" className="tab"></label>
      <div className="login-form">
        <div className="sign-in-htm">
          <div className="group">
            <label htmlFor="user" className="label">Username</label>
            <input id="user" type="text" className="input" name="UserName" onChange={handleInput} />
          </div>
          <div className="group">
            <label htmlFor="pass" className="label">Password</label>
            <input id="pass" type="password" className="input" data-type="password" name="Password" onChange={handleInput}/>
          </div>
          <div className="group">
            <input id="check" type="checkbox" className="check"/>
            <label htmlFor="check"><span className="icon"></span> Keep me Signed in</label>
          </div>
          <div className="group">
            <button type="submit" className="button"  onClick={authintication}>Sign In</button>
          </div>
          <div className="hr"></div>
          <div className="foot-lnk">
           
            <a href="#forgot">Forgot Password?</a>
          </div>
        </div>
       
      </div>
    </div>
  </div>

}















    {/* // <div className="login-wrap" > */}
        

        //         </div>
        //     </div>
        //     <div className="group">
        //         <label htmlFor="user" className="label">Username</label>
        //         <input id="user" type="text" name="UserName" onChange={handleInput} placeholder="Username" className="input"></input><br />
        //     </div>
        //     <div className="group">
        //         <label htmlFor="pass" className="label">Password</label>
        //         <input id="pass" type="password" name="Password" onChange={handleInput} placeholder="Password" className="input"></input><br />
        //     </div>
        //     <div className="group">
        //         <input type="submit" className="button" value="Sign In" onClick={authintication} />
        //     </div>
        // </div>


        // <div className="hr"></div> */}

    {/* </div> */}


