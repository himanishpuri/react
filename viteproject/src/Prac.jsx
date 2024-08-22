import { useState } from "react";

function Prac() {
  let [counter, setCounter] = useState(0);
  const increase = () => {
    counter++;
    setCounter(counter);
  };

  const decrease = () => {
    counter > 0 && counter--;
    setCounter(counter);
  };
  return (
    <>
      <p>The current value of Counter is {counter}</p>
      <button onClick={increase}>Press Me to Increase Counter</button>
      <br />
      <button onClick={decrease}>Press Me to Decrease Counter</button>   
    </> 
  )
}

export default Prac;
