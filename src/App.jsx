import { use, useState } from "react";
import Header, { Profile } from "./Header";
import User from "./User";
import Wrapper from "./Wrapper";

// function click(){
//   alert("Bhaar vala");
// }

function App() {
  //const name = "Apoorv";
  let [val, setVal] = useState("");
  const [name,setName] = useState("");
  const [pwd,setPwd] = useState("");
  const [email,setEmail] = useState("");
  
  return (
    <>
      <div>
        <h1>Controlled components</h1>
        <form action="" method="get">
          <input type="text" name="" id="" placeholder="Enter name" value={name} onChange={(event)=>setName(event.target.value)} />
          <br />
          <br />
          <input type="password" name="" id="" placeholder="Enter Password" value={pwd} onChange={(event)=>setPwd(event.target.value)} />
          <br />
          <br />
          <input type="text" name="" id="" placeholder="Enter email" value={email} onChange={(event)=>setEmail(event.target.value)} />
          <br />
          <br />
          <button>Submit</button>
          <button onClick={()=>{setEmail("");
            setName("");
            setPwd("");
          }} >Clear</button>
          <br />
          <h3>{name}</h3>
          <h3>{pwd}</h3>
          <h3>{email}</h3>
        </form>
      </div>
    </>
  );
}

export default App;
