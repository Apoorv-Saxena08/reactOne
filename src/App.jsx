import Header,{Profile} from "./Header"

function Apoorv(){
  function click(){
    alert("You clicked me!!");
  }
   const name = "Apoorv";
  return (
    <div>
      <Header></Header>
    <h1>My name is {name}</h1>
    <Profile></Profile>
    <button onClick={click} >Click me</button>
    </div>

  )
}

export default Apoorv