import { useRef } from "react";
import User from "./User";

function App(){

  const displayName = (name)=>{
        console.log(name);
  }

  return (
  <div >
      <h1>Pass function in component as props</h1>
      <br />
      <User displayName={displayName} name="apoo" /><br /><br />
      <User displayName={displayName} name="srk" /><br /><br />
      <User displayName={displayName} name="pappu" /><br /><br />
      <User displayName={displayName} name="burahh" /><br /><br />

   </div>

  );
}

export default App;
