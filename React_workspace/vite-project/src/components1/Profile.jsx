import React from 'react'
import UserContext from '../Context/UserContext'

function Profile() {
  const {user} = UserContext(UserContext)
 
  if(!user) return <div>Plz Login</div>

  return <div>Welcome {user.username}</div>

}

export default Profile
