// import React from 'react'
import React, { useState } from 'react'

export default function App() {

  let [counter,setCounter] = useState(3)

  // let counter = 0

  const addnum = () => { 
    counter = counter + 1
    // console.log(counter)
    setCounter(counter)
  }

  const revnum = () => { 
    setCounter(counter = counter - 1)
  }

  if(counter == 0){
      document.getElementById('remove').style.display = "none";
   
  }

  return (
    <>
      <h1>chai or react</h1>
      <h2>counter value</h2>
      <button onClick={addnum}>add value : {counter}</button>
      <button id='remove' onClick={revnum}>remove value : {counter}</button>
    </>
  )
}
