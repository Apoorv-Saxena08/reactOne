import { use, useEffect, useState } from "react";

function App(){
  const [val,setVal] = useState(0);

  function callOnce(){
    console.log("Hello");
  }

  useEffect(()=>{
    callOnce();
  },[val])


  return (
    <>
      <div>
        <h1>UseEffect</h1>
        <button onClick={()=>setVal(val+1)} >Counter {val}</button>
      </div>
    </>
  );
}

export default App;
