

import { useState } from "react";
import { InputBox } from "./components";
import useCurrencyInfo from "./Hooks/useCurrencyInfo";

function App() {
  // Amount and currency at from side - which have to covert
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");

  // Amount and currency at to side - Gives converted value
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState();

  // using custom hook
  const currencyInfo = useCurrencyInfo(from);

  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setAmount(convertedAmount);
    setConvertedAmount(amount);
  };

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-o-repeat"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/7567222/pexels-photo-7567222.jpeg?auto=compress&cs=tinysrgb&w=800')",
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border bordr-grey-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            action=""
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            <div className="w-full mb-1">
              <InputBox
                label="From"
                amount={amount}
                currencyOptions={options}
                onCurrencyChange={(currency) => {
                  setAmount(amount);
                }}
                onAmountChange={(amount)=>{
                  setAmount(amount);
                }}
                selectCurrency={from}
              />
            </div>

            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={swap}
              >
                swap
              </button>
            </div>

            <div className="w-full mt-1 mb-4">
              <InputBox
                label="To"
                amount={convertedAmount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setTo(currency)}
                selectCurrency={from}
                amountDisabled
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
            >
              Convert {from.toUpperCase()} To {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;

