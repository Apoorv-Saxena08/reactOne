import { use, useEffect, useState } from "react";
import Counter from "./Counter";


function App(){

  const [count,setCount] = useState(0);
  const [data,setData] = useState(0);
  const [disp,setDisp] = useState(true);
  return (
    <>
      <div>
        <h1>LifeCycle</h1>

        {
          disp?<Counter counter={count}  data={data} />:null
        }

        <button onClick={()=>setCount(count+1)} >Counter {count}</button>
        <button onClick={()=>setData(data+1)} >Data {data}</button>
        <button onClick={()=>setDisp(!disp)} >Toggle</button>
      </div>
    </>
  );
}

export default App;
