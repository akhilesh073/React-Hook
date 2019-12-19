import React from "react";
import useInput from "./hooks/useInput";
const InputCustomHook = () => {
  const [firstName, bindFirstName, resetFirstName] = useInput("");
  const [lastName, bindLastName, resetLastName] = useInput("");
  const submitHandler = e => {
    e.preventDefault();
    alert(`Hello ${firstName} ${lastName}`);
    resetFirstName();
    resetLastName();
  };
  return (
    <div>
      <form onSubmit={submitHandler}>
        <label>First Name</label>
        <input type="text" {...bindFirstName} />
        <br />
        <br />
        <label>Last Name</label>
        <input type="text" {...bindLastName} />
        <br />
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default InputCustomHook;
