import { useState } from "react"
import Header,{Profile} from "./Header"

// function click(){
//   alert("Bhaar vala");
// }

function Apoorv(){
   const [val, setVal] = useState(0);
  const increase = () => {
    setVal(val + 1);
  }

  const decrease = () =>{
    setVal(val -1);
  }
  return (
    <>
      <h1>Counter</h1>
      <h2>Current value is {val}</h2>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
    </>
  )
}

export default Apoorv