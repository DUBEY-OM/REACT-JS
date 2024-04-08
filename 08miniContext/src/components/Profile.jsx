import React,{UseContext} from 'react'
function Profile(){const {user}=useContext(UserContext)

  return (
   if(!user) {return <div>Please Login</div>}
   return <div>Welcome {user.username}</div>
  )
}
export default Profile