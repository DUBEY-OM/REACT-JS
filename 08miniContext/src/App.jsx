import { useState } from 'react'
import { userContextprovider } from './context/usercontextprovider.jsx'
import Login from './components/Login'
import Profile from './components/Profile'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <userContextprovider>
        <h1>React is good</h1>
        <login/>
        <Profile/>
      </userContextprovider>
      
    </>
  )
}

export default App
