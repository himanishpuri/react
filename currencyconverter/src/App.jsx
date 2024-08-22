import InputBox from "./components/InputBox";
import useCurrencyInfo from "./hooks/customHooks";
import { useState } from "react";
import background from "./assets/skyline.jpg";

function App() {
  const [amount, setAmount] = useState('');
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState('');

  const currencyInfo = useCurrencyInfo(from);

  const options = Object.keys(currencyInfo);

  const handlSwap = function () {
    let temp = to;
    setTo(from);
    setFrom(temp);
    temp = convertedAmount;
    setConvertedAmount(amount);
    setAmount(temp);
  };

  const handleConvert = function () {
    let amt = (amount * currencyInfo[to]).toFixed(2);
    setConvertedAmount(amt);
  };

  return (
    <>
      <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover"
        style= {{backgroundImage: `url(${background})`}}>
        <div className="w-full">
          <div className="w-full max-w-md mx-auto border border-white rounded-lg p-5 backdrop-blur-sm bg-gray-600/50">
          <h1 className="mb-5 text-3xl font-semibold text-slate-50 text-center">Currency Converter</h1>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleConvert();
              }}
            >
              <div className="w-full mb-3">
                <InputBox
                  label={"From"}
                  amount={amount}
                  currencyOptions={options}
                  onCurrencyChange={(currency) => setFrom(currency)}
                  selectCurrency={from}
                  onAmountChange={(amt) => setAmount(amt)}
                />
              </div>
              <div className="relative w-full h-0.5">
                <button
                  type="button"
                  className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-black rounded-md bg-red-600 hover:bg-blue-700 duration-200 text-white px-2 py-0.5 text-lg font-medium"
                  onClick={handlSwap}
                >
                  Swap
                </button>
              </div>
              <div className="w-full mt-1 mb-4">
                <InputBox
                  label={"To"}
                  amount={convertedAmount}
                  currencyOptions={options}
                  onCurrencyChange={(currency) => setTo(currency)}
                  selectCurrency={to}
                  amountDisable={true}
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-red-700 duration-200 text-white px-4 py-3 rounded-lg font-medium"
              >
                Convert {from.toUpperCase()} to {to.toUpperCase()}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
