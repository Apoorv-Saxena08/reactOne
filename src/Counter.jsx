import { use, useEffect } from "react";

function Counter({counter,data}){

   //mounting phase
   useEffect(()=>{
        console.log("Mounting phase");
   },[])

   //update count phase
   useEffect(()=>{
        console.log("Counting phase updated");
   },[counter])

   //unMount
   useEffect(()=>{
        return ()=>{
            console.log("Unmounted");
        }
   },[]);

    return(
        <div>
            <h3>{counter}</h3>
            <h3>{data}</h3>
        </div>
    )
}

export default Counter;