import { use, useState } from "react"
import Header,{Profile} from "./Header"

// function click(){
//   alert("Bhaar vala");
// }

function Apoorv(){
  const [count,setCount] = useState(0);

  const change =()=>{
    setCount(count+1)
  }


  return (
    <>
      <h1>Multiple conditionals</h1>
      <h2>{count}</h2>

      <button onClick={change}>Change</button>

      {
        count==0?<p>Count is 0</p>
        :count == 1?<p>Count is 1</p>
        :count == 2?<p>Count is 2</p>
        :<p>Count aapse se bhaar ho gya</p>
      }

    </>
  )
}

export default Apoorv