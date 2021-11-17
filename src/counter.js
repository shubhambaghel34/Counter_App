import { useState } from "react";

const CounterComponent = () => {
  const [counter, setCounter] = useState(0);
  const [value, setValue] = useState("");
  //https://randomuser.me/api/

  const onclickHandle = () => {
    setCounter(counter + 1);
  };

  function onchangehandler(event) {
    setValue(event.target.value);
  }

  return (
    <div>
      <input onChange={onchangehandler} value={value} />
      <p>{value}</p>
      <button onClick={onclickHandle}>Counter Button</button>{" "}
      <p>you have clicked {counter} times !</p>
    </div>
  );
};

export default CounterComponent;
