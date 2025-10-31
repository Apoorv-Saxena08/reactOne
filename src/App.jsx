import { use, useEffect, useState } from "react";
import Counter from "./Counter";
import UserProfile from "./UserProfile";


function App(){

  return (
  <div >

    <h1 className="heading" >This is the page </h1>

    <div style={{display:"flex" ,flexWrap:"wrap"}} >
    <UserProfile />
    <UserProfile />
    <UserProfile />
    <UserProfile />
    <UserProfile />
    <UserProfile />
    </div>

  </div>

  );
}

export default App;
