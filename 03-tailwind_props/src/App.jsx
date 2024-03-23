import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card.jsx'
//using devUI library for cards
function App() {
  const [count, setCount] = useState(0)
  let myobj={name:"om",age:21} 
  let newarr=[1,2,3,4]
  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl'>Tailwind Test</h1>
      <Card username="chai aur code" someOb={newarr} />
      <Card  username="OM" btntext="visitme"/>
    </>
  )
}

export default App
