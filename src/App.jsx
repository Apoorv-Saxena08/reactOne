import { useRef, useState, useTransition } from "react";
import User from "./User";
import UserInput from "./UserInput";
import { useFormStatus } from "react-dom";
import AddUser from "./AddUser";
import DisplayUSer from "./DisplayUSer";


function App() {
  const [user, setUser] = useState('');

  return (
    <div>
         <h1>Lifting State up</h1>
         <br />

         <AddUser setUser={setUser} />
         <DisplayUSer user={user}  />
    </div>
  );
}

export default App;
