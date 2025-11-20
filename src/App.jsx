import { useRef } from "react";
import User from "./User";
import UserInput from "./UserInput";

function App(){

  const inputRef = useRef(null);

  const update=()=>{
    inputRef.current.value = '200';
    inputRef.current.focus();
  }
  return (
  <div >
      <h1>Forward Ref</h1>
      <UserInput ref={inputRef}/>
      <button onClick={update} >Update Input Field</button>
   </div>

  );
}

export default App;
