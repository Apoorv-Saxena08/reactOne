import { useState } from "react";

function Checkboxes(){
    const [skill,setSkill] = useState([]);
    const handle =(event)=>{
        let val = event.target.value;
        let check = event.target.checked;
        console.log(val,check);
        if(check){
            setSkill([...skill,val]);
        }
        else{
            setSkill([...skill.filter((item)=> item!=val)]);
        }
    }
    return(
        <div>
            <h3>Select an option</h3>
            <input type="checkbox" name="" id="php" value="php" onChange={handle} />
            <label htmlFor="php">Php</label>
<br />
            <input type="checkbox" name="" id="java" value="java" onChange={handle} />
            <label htmlFor="java">Java</label>
<br />      
            <input type="checkbox" name="" id="c++" value="c++" onChange={handle}/>
            <label htmlFor="c++">C++</label>
            
            <br />
            <h1>{skill.toString()}</h1>
        </div>
        
    )
}

export default Checkboxes;