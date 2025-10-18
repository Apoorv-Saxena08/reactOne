import { use, useState } from "react"
import Header,{Profile} from "./Header"
import User from "./User"
import Wrapper from "./Wrapper"

// function click(){
//   alert("Bhaar vala");
// }

function Apoorv(){
  const name = "Apoorv";
  return (
    <>
    <h1>Props</h1>
    <User name={"Virat kohli"} />
    <Wrapper color="red" >
      <h1>Hello Everyone</h1>
      <h2>{name}</h2>
    </Wrapper>

    <Wrapper color="blue" >
      <h1>Hello Everyone</h1>
      <h2>Meer</h2>
    </Wrapper>
    </>
  )
}

export default Apoorv