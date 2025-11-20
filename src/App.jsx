import { useRef } from "react";

function App(){

  const userRef = useRef();
  const pwdRef = useRef();

  const handleForm =(e)=>{
    e.preventDefault();
    const user = document.querySelector("#user").value;
    console.log(user);
    const pwd = document.querySelector("#pwd").value;
    console.log(pwd); 
  }
  const handleFormRef =(e)=>{
    e.preventDefault();
    const user = userRef.current.value;
    console.log(user);
    const pwd = pwdRef.current.value;
    console.log(pwd); 
  }

  return (
  <div >
      <h1>Uncontrolled Component</h1>
      <form action="" onSubmit={handleForm} >
        <br />
        <input type="text" id="user" placeholder="Enter username" />
        <br /><br />
        <input type="password" name="" id="pwd" placeholder="Enter password" />

        <br /> <br />
        <button>
          Submit
        </button>
      </form>

      <hr />
      <h1>Uncontrolled Component with useRef</h1>
      <form action="" onSubmit={handleFormRef} >
        <br />
        <input type="text" id="userRef" ref={userRef} placeholder="Enter username" />
        <br /><br />
        <input type="passwordRef" name="" ref={pwdRef} id="pwd" placeholder="Enter password" />

        <br /> <br />
        <button>
          Submit with Ref
        </button>
      </form>

   </div>

  );
}

export default App;
