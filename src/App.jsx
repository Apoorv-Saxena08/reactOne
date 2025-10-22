import { use, useState } from "react";
import Header, { Profile } from "./Header";
import User from "./User";
import Wrapper from "./Wrapper";
import Checkbox from "./Checkbox";
// function click(){
//   alert("Bhaar vala");
// }

function App() {
  //const name = "Apoorv";
  let [val, setVal] = useState("");
  const [name,setName] = useState("");
  const [pwd,setPwd] = useState("");
  const [email,setEmail] = useState("");
  
  const [gender,setGen] = useState("Male")
  const [city,setCity] = useState("Delhi");
  return (
    <>
      <div>
        <h3>Selected Gender : {gender} </h3>
        <input type="radio" name="gender" id="male" 
        onChange={(e)=>setGen(e.target.value)} value="Male"
        checked={gender=="Male"}
        />
        <label htmlFor="male">Male</label>
        <input type="radio" name="gender" id="female"
        onChange={(e)=>setGen(e.target.value)}
        value={"Female"}
        checked={gender=="Female"}
        />
        <label htmlFor="female">Female</label>
        <hr />

        <h4>Select City</h4>
        <select name="" id=""
        onChange={(e)=>setCity(e.target.value)}
        defaultValue={"Delhi"} >
          <option value="Noida">Noida</option>
          <option value="Delhi">Delhi</option>
          <option value="Mumbai">Mumbai</option>
        </select>
        <h3 style={{color:"red"}} >You Choosed : {city} </h3>
      </div>
    </>
  );
}

export default App;
