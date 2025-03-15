import { useState } from "react";
import "./App.css";

function App() {
  // let counter = 16;
  const [counter, setCounter] = useState(0);

  const addValue = () => {
    // setCounter(count + 1)
    // setCounter((counter)=>counter+1);
    if (counter <= 19) {

      setCounter(counter=> counter+1)

      // After writing multiple add operation still we are able to add 1 number after btn click
      // This is due to counter updates its value each time and takes value from usetate so 0+1 = 1
      // setCounter(counter + 1);  
      // setCounter(counter + 1);  
      // setCounter(counter + 1);  
      // setCounter(counter + 1);  

      // using Callback method in useState
      // This method updates previous counter by one so it will executed by 4 times so previuos number +4 is the final value
      // setCounter(prevCounter => prevCounter + 1);     
      // setCounter(prevCounter => prevCounter + 1);     
      // setCounter(prevCounter => prevCounter + 1);           
      // setCounter(prevCounter => prevCounter + 1);           
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
