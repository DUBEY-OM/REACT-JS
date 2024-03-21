import { useState } from 'react'//hooks//
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  var [counter,setCounter]=useState(15)
  // let counter=6
  const addvalue = ()=>{console.log("clicked",counter);
  // counter=counter+1
  if(counter + 1 > 20){
    alert("Limit exceed");counter=0;
  } else {
    setCounter(counter+1)
   
  }

  }
  const removeValue =()=>{  if(counter-1 < 0){
    alert("Value cannot be negetive");counter=15;
  } else {
    setCounter(counter-1)
    console.log(counter)
  }}
  return (<> <h1>Chai pee lo</h1><h2>counter value:{counter}</h2>
  <button onClick={addvalue}> Add  value{counter}</button><br></br>
  <button onClick={removeValue}>Remove value {counter}</button>
  <p>{counter}</p>
  
  </>)
   
}

export default App
