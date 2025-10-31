import { useRef } from "react";

function App(){

  const inputRef = useRef(null);
  const h1ref = useRef(null);
  const inputHandler =()=>{
    console.log(inputRef);
    inputRef.current.focus();
    inputRef.current.style.color='red';
    inputRef.current.value='123';
  }

  const toggle =()=>{
    if(inputRef.current.style.display != 'none'){
      inputRef.current.style.display = 'none'
    }
    else{
      inputRef.current.style.display = 'inline'
    }
  }

  const h1handle=()=>{
    h1ref.current.style.color='green';
    h1ref.current.value='Balle balle';
  }
  return (
  <div >
      <h1 ref={h1ref} >UseRef hook</h1>
      <button onClick={h1handle} >Change heading</button>
      <br />
      <br />
      <button onClick={toggle} >Toggle</button>
      <input type="text" ref={inputRef} placeholder="Enter name" />
      <button onClick={inputHandler} >Focus on input</button>
  </div>

  );
}

export default App;
