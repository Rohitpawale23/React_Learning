import { useCallback, useEffect, useState, useRef } from "react";

function App() {
  // required Use state
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumAllowed] = useState(false);
  const [characterAllowed, setCharAllowed] = useState(false);

  // Syntax of useCallback Hook
  // let functionName = useCallback(fn, [length, numberAllowed, characterAllowed, password])

  // Syntax for useEffect Hook
  // useEffect(()=> {Callabck}, [dependencyArray])

  // Syntax for useRef hook
  const passwordRef = useRef(null);

  // Password Generator method
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789";
    if (characterAllowed) str += "!@#$%^&*()_+~`|";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);

      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllowed, characterAllowed, setPassword]);

  // if we passed password into dependency array the it gors into infinite changes because password's value is changing continuosly
  // to avois this use pass setPassword

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, characterAllowed, passwordGenerator]);

  // passwordGenerator() : give error for direct call use useEffect hook

  // Function to copy the password generated into clipboard
  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    // passwordRef.current?.setSelectionRange(0,15);
    passwordRef.current?.setSelectionRange(0, 100);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  return (
    <div className=" w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className="text-white text-center my-y-3 pb-5 font-semibold text-2xl">
        Password Generator
      </h1>

      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
          type="text"
          id="password"
          value={password}
          className="outline-none w-full py-1 px-3 bg-white"
          placeholder="Password"
          readOnly
          ref={passwordRef}
        />

        <button
          onClick={copyPasswordToClipboard}
          className=" cursor-pointer outline-none hover:bg-sky-400 bg-blue-700 text-white px-3 py-0.5 shrink-0"
        >
          Copy
        </button>
      </div>

      <div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="w-36 h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer accent-blue-500
           [&::-webkit-slider-thumb]:appearance-none 
           [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:bg-blue-500 
           [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:shadow-md 
           [&::-moz-range-thumb]:w-6 [&::-moz-range-thumb]:h-6 [&::-moz-range-thumb]:bg-blue-500 "
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />

            <label>Lenght : {length}</label>

            <div className="flex items-center gap-x-1">
              <input
                type="checkbox"
                id="numberInput"
                onChange={() => {
                  setNumAllowed((prev) => !prev);
                }}
              />
              <label htmlFor="numberInput">Numbers</label>
            </div>

            <div className="flex items-center gap-x-1">
              <input
                type="checkbox"
                id="charInput"
                onChange={() => {
                  setCharAllowed((prev) => !prev);
                }}
              />
              <label htmlFor="charInput">Characters</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
