// // import React from 'react'
// import React, { useState } from 'react'

// export default function App() {

//   let [counter,setCounter] = useState(3)

//   // let counter = 0

//   const addnum = () => { 
//     counter = counter + 1
//     // console.log(counter)
//     setCounter(counter)
//   }

//   const revnum = () => { 
//     setCounter(counter = counter - 1)
//   }

//   if(counter == 0){
//       document.getElementById('remove').style.display = "none";
   
//   }

//   return (
//     <>
//       <h1>chai or react</h1>
//       <h2>counter value</h2>
//       <button onClick={addnum}>add value : {counter}</button>
//       <button id='remove' onClick={revnum}>remove value : {counter}</button>
//     </>
//   )
// }

// -------------------------------------


// import React from 'react';
// // import PDFViewer from './PDFViewer';
// import Card from './Card';

// let myobj={
//   username:'pawan',
//   age:'22',
//   location:'Nagpur'
// }

// function App() {
//   return (
//     <div className="App">
//      <Card name="Pawan" des="my name is Pawan"  />
//      <Card name="Tanmay" des="my name is Tanmay"/>
//     </div>
//   );
// }

// export default App;


// =====================================

import React from "react";
import Header from "./components/Header/Header";


function App(){
  const[count, setCounter] = useState(0)

  return(
    <>
    
    </>
  )
}

export default App