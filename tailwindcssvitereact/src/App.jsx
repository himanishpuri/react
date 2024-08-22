import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState('gray')

  const reset = function(e) {
    if ([...(document.querySelectorAll('.btn'))].includes(e.target) || color === 'gray') return;
    setColor('gray');
  };

  return (
    <div className="w-full h-screen duration-500" style={{backgroundColor: color}}>
      <div onClick={reset} className="bg-white fixed bottom-12 rounded-2xl flex flex-nowrap justify-center inset-x-1/4 px-4 py-3 font-semibold text-xl outline-dashed">
        <button onClick={() => setColor('purple')} className="btn border-2 border-black rounded-lg px-3 py-1 mx-3 text-white" style={{backgroundColor: "purple"}}>Purple</button>
        <button onClick={() => setColor('green')} className="btn border-2 border-black rounded-lg px-3 py-1 mx-3 text-white" style={{backgroundColor: "green"}}>Green</button>
        <button onClick={() => setColor('yellow')} className="btn border-2 border-black rounded-lg px-3 py-1 mx-3" style={{backgroundColor: "yellow"}}>Yellow</button>
        <button onClick={() => setColor('black')} className="btn border-2 border-black rounded-lg px-3 py-1 mx-3 text-white" style={{backgroundColor: "black"}}>Black</button>
        <button onClick={() => setColor('red')} className="btn border-2 border-black rounded-lg px-3 py-1 mx-3 text-white" style={{backgroundColor: "red"}}>Red</button>
        <button onClick={() => setColor('indigo')} className="btn border-2 border-black rounded-lg px-3 py-1 mx-3 text-white" style={{backgroundColor: "indigo"}}>Indigo</button>
        <button onClick={() => setColor('orange')} className="btn border-2 border-black rounded-lg px-3 py-1 mx-3" style={{backgroundColor: "orange"}}>Orange</button>
        <button onClick={() => setColor('pink')} className="btn border-2 border-black rounded-lg px-3 py-1 mx-3" style={{backgroundColor: "pink"}}>Pink</button>
      </div>
    </div>
  );
}

export default App;
 