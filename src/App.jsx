import { useRef, useTransition } from "react";
import User from "./User";
import UserInput from "./UserInput";
import { useFormStatus } from "react-dom";
function App() {

  const [pending,startTransition] = useTransition();
  const handlebtn =()=>{

    startTransition( async()=>{
      await new Promise(res=> setTimeout(res,5000));
    } )
  }

  return (
    <div>
      <h1>useTransition hook </h1>
      <br />

      {
        pending?
        <img src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExZmprZnpoMHN3bjh2ODdmdmo0OTM5dnRmanE4OWhrY3B4eDEzNjdvciZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xTk9ZvMnbIiIew7IpW/giphy.gif" alt="" />:null
      }

      <button disabled={pending} onClick={handlebtn} >{pending?"Submitting":"Submit"}</button>
    </div>
  );
}

export default App;
