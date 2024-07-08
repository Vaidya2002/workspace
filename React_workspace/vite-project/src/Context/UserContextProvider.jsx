import React from "react";
import UserContext  from "./UserContext";

const userContextProvider = ({children}) => {
    const [user, setUser] = React.useState(null)
    return(
        <userContextProvider value={{user, setUser}}>
        {children}
        </userContextProvider>
    )
}

export default UserContext