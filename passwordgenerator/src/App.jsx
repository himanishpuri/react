import { useEffect } from "react";
import { useRef } from "react";
import { useCallback } from "react";
import { useState } from "react";

function App() {
  const [length, setLength] = useState(0);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characterAllowed, setCharacterAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const passWordRef = useRef(null);

  const passwordGenerator = useCallback(
    function () {
      let pass = "";
      let str = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM";

      if (numberAllowed) str += "1234567890";
      if (characterAllowed) str += "'`~!@#$%^&*()-_=+{}[]|:;<>,.?/₹";

      for (let i = 1; i <= length; i++) {
        let char = Math.floor(Math.random() * str.length + 1);

        pass += str.charAt(char);
      }

      setPassword(pass);
    },
    [length, numberAllowed, characterAllowed, setPassword]
  );

  useEffect(() => {passwordGenerator()}, [length, numberAllowed, characterAllowed, passwordGenerator])

  const handleCopy = async function(e) {
    window.navigator.clipboard.writeText(password);
    passWordRef.current?.select();
  }

  return (
    <>
      <div className="w-full bg-slate-800 rounded-lg mx-auto max-w-2xl px-4 py-3 my-8 text-white flex flex-col gap-y-3">
        <h1 className="text-2xl font-semibold text-center">
          Password Generator
        </h1>
        <div className="flex gap-x-2 justify-center items-center mb-3 text-lg">
          <input
            type="text"
            value={password}
            placeholder="Password"
            id="password"
            className="px-3 py-1 rounded-lg w-4/6 text-black"
            ref={passWordRef}
            readOnly
          ></input>
          <button onClick={handleCopy} className="bg-slate-500 px-2 py-1 rounded-md hover:bg-slate-600 duration-200 shrink-0 active:bg-black active:text-white">
            Copy
          </button>
        </div>
        <div className="flex items-center justify-evenly">
          <input
            type="range"
            min={0}
            max={40}
            value={length}
            name="passwordLengthSlider"
            id="passwordLengthSlider"
            className="accent-red-600 max-w-xs cursor-pointer"
            onChange={(e) => setLength(e.target.value)}
          />
          <label htmlFor="passwordLengthSlider">Length {length}</label>
          <input
            type="checkbox"
            name="number"
            defaultChecked={numberAllowed}
            id="number"
            onChange={(e) => setNumberAllowed(na => !na)}
            className="accent-red-600"
          />
          <label htmlFor="number" className="-ml-3">Number</label>
          <input
            type="checkbox"
            name="character"
            defaultChecked={characterAllowed}
            id="character"
            onChange={(e) => setCharacterAllowed(na => !na)}
            className="accent-red-600"
          />
          <label htmlFor="character" className="-ml-3">Character</label>
        </div>
      </div>
    </>
  );
}

export default App;
