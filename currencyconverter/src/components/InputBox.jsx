import { useId } from "react";

function InputBox({
  label,
  className = "",
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "usd",
  amountDisable = false,
  currencyDisable = false,
}) {

  const amountId = useId();

  return (
    <>
      <div className={`bg-white p-3 rounded-lg text-sm flex font-serif ${className}`}>
        <div className="w-1/2">
          <label htmlFor={amountId} className="text-black/70 mb-2 inline-block px-1 ">
            {label}
          </label>
          <input
            id={amountId}
            className="w-full bg-white py-1.5 px-1.5"
            type="number"
            placeholder="Amount"
            disabled={amountDisable}
            value={amount}
            onChange={(e) => onAmountChange(Number(e.target.value))}
          />
        </div>
        <div className="w-1/2 flex flex-wrap justify-end text-right">
          <p className="text-black/70 mb-2 w-full">Currency Type</p>
          <select
            className="rounded-lg px-1 py-1 bg-gray-200 cursor-pointer"
            value={selectCurrency}
            onChange={(e) => onCurrencyChange(e.target.value)}
            disabled={currencyDisable}
          >
            {currencyOptions.map((curr) => (
              <option key={curr} value={curr}>{curr}</option>
            ))}
          </select>
        </div>
      </div>
    </>
  );
}

export default InputBox;
