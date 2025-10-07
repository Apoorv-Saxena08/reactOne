import { useState } from "react"
import Header,{Profile} from "./Header"

// function click(){
//   alert("Bhaar vala");
// }

function Apoorv(){
  const [display , setDisp] = useState(true);

  const anaJana = ()=>{
    setDisp(!display);
  }

  return (
    <>
      <h1>Toggle</h1>
      {
        display?<Header />:null
      }
      <button onClick={anaJana}>Apoorv ka button</button>

    </>
  )
}

export default Apoorv