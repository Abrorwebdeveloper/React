import React, {useState} from "react";

function App() {
  const [count, setCount] = useState( 0 )

  function Inc() {
    setCount(prev => prev + 1)
  } 

  function Dec() {
    setCount(prev => prev - 1)
  }
  return(
    <>
      <h3>Count: { count } </h3>
      <button onClick = { Inc } className = "btn1">Inc</button>
      <button onClick = { Dec } className = "btn2">Dec</button>
  </>
  )
   
}

export default App;
