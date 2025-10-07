import { useState } from "react"
import Header,{Profile} from "./Header"

// function click(){
//   alert("Bhaar vala");
// }

function Apoorv(){
  const [display , setDisp] = useState(true);

  const bulao = ()=>{
    setDisp(true);
  }

  const bhgao = ()=>{
    setDisp(false);
  }
  return (
    <>
      <h1>Toggle</h1>
      {
        display?<h1>Apoorv aa gya</h1>:<h1>Apoorv chla gya</h1>
      }
      <button onClick={bulao}>Apoorv bulao button</button>
      <button onClick={bhgao}>Apoorv bhgao button</button>
    </>
  )
}

export default Apoorv