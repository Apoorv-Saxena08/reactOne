import { useRef, useState, useTransition } from "react";

function App() {
  const [data,setData] = useState({
    name:'',
    address:{
      city:'',
      country:'India'
    }
  })

  const handleName=(val)=>{
    data.name = val;
    // console.log(val);
    setData({...data});
  }

  const handleCity=(val)=>{
    data.address.city = val;
    setData({...data,address:{...data.address,val}});
  }

  return (
    <div>
         <h1>Updating Objects in State</h1>
         <br />
        <input type="text" placeholder="Enter name"
        onChange={(e)=>handleName(e.target.value)}
        />

        <br />

        <input type="text" placeholder="Enter city"
        onChange={(e)=>handleCity(e.target.value)}
        />
        <br /> <br />
        <h2>{data.name}</h2>
        <h2>{data.address.city}</h2>
        <h2>{data.address.country}</h2>
    </div>
  );
}

export default App;
