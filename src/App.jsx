import { use, useState } from "react";
import Header, { Profile } from "./Header";
import User from "./User";
import Wrapper from "./Wrapper";

// function click(){
//   alert("Bhaar vala");
// }

function App() {
  //const name = "Apoorv";
  let [val,setVal] = useState("");

  return (
    <>
      <div>
        <h1>Learning about input field</h1>
        <input type="text" value={val} onChange={(event)=>setVal(event.target.value)} name="" id="" placeholder="Enter name" />
        <h1>{val}</h1>
        <button onClick={()=>setVal("")}>Clear</button>
      </div>
    </>
  );
}

export default App;
