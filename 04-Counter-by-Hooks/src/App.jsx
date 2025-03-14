import { useState } from "react";
import "./App.css";

function App() {
  // let counter = 16;
  let [counter, setCounter] = useState(0);

  const addValue = () => {
    // setCounter(count + 1)
    // setCounter((counter)=>counter+1);
    if (counter <= 19) {
      setCounter(counter + 1);
    }
    // else
    // {
    //   setCounter(counter=20);
    // }
    console.log("Value added", counter);
  };

  function reduceValue() {
    // setCounter((counter)=>counter-1);
    console.log("Value reduced", counter);
    if (counter > 0) {
      // setCounter((counter)=>counter-1);
      setCounter(counter - 1);
    }
    // else
    // {
    //   setCounter(counter=0);
    // }
  }

  return (
    <>
      <h2>Project : Counter App</h2>

      <h3>Counter value: {counter}</h3>

      <button onClick={addValue}> Add Value: {counter}</button>
      <br />
      <br />
      <button onClick={reduceValue}> Reduce Value: {counter}</button>
      {/* <button onClick={() => setCount((count) => count-1)}>
          Reduce count : {count}
        </button> */}
    </>
  );
}

export default App;
