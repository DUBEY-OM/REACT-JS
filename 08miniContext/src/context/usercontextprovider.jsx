import React from "react"
import userContext from "./userContext.js"
const userContextprovider=({childern})=>{
    return(
        const  [user,setuser]=React.useState(null)
        <userContext.provider value={{user,setuser}}>
            {children}
            </userContext.provider>
    )
}
export default userContextprovider