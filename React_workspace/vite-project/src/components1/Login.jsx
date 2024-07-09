import React, { useContext } from "react";
import UserContext from "../Context/UserContext";


function login() {
     
    
     const [username, setUsername] = useState('')
     const [password, setPassword] = useState('')

     const {setUser} = useContext(UserContext)

     const handlesubmit = (e) => {e.preventDefault()
                                    setUser({username, password})
                                 }    
      
    return (
        <div>
            <h2>login</h2>
            <input type="text" placeholder="username" value={username} onClick={(e) => setUsername(e.target)}/>
            <input type="text" placeholder="password" value={password} onClick={(e) => setPassword(e.target)}/>
            <button onClick={handlesubmit}>Submit</button>
        </div>
    )
}

export default login