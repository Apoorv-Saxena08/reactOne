import { useRef } from "react";
import User from "./User";
import UserInput from "./UserInput";
import { useFormStatus } from "react-dom";
function App() {
  const handleSubmit = async () => {
    await new Promise((res) => setTimeout(res, 2000));
    console.log("Submit");
  };

  function CustomerDetail() {

    const {pending}  = useFormStatus()

    return (
      <div>
        <form action={handleSubmit}>
          <input type="text" name=""  placeholder="Enter name" /> <br />
          <br />
          <input type="password" name=""placeholder="Enter password" />
          <br />
          <br />
          <button disabled={pending}>{pending?"Submitting":"Submit"}</button>
        </form>
      </div>
    );
  }

  return (
    <div>
      <h1>UseFormStatus hook </h1>
      <br />
      <CustomerDetail />
    </div>
  );
}

export default App;
