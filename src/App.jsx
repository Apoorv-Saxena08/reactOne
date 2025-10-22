import { use, useState } from "react";
import Header, { Profile } from "./Header";
import User from "./User";
import Wrapper from "./Wrapper";
import Checkbox from "./Checkbox";
// function click(){
//   alert("Bhaar vala");
// }

function App() {
  const user = [
    {
      id: 1,
      name: "Apoorv",
      age: 20,
    },
    {
      id: 2,
      name: "Anil",
      age: 25,
    },
    {
      id: 3,
      name: "Sachin",
      age: 10,
    },
    {
      id: 4,
      name: "Yash",
      age: 29,
    },
  ];

  return (
    <>
      <div>
        <h1>Loop in Jsx</h1>
        <table border="1">
          <thead>
            <tr>
              <td>Id</td>
              <td>Name</td>
              <td>Age</td>
            </tr>
          </thead>

          <tbody>
            {user.map((u) => (
              <tr key={u.id}>
                <td>{u.id}</td>
                <td>{u.name}</td>
                <td>{u.age}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default App;
