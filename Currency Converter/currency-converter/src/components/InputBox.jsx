import React from 'react'

function InputBox({
  label,
  currencyArray=[],
  amount,
  onAmountChange,
  selectCurrency,
  onCurrencyChange,
  amountDisable
  }) {

  return (
    <div>
      <div className='w-full bg-white flex flex-wrap justify-between items-center px-4 pb-4 pt-2 rounded-lg'>

        <div>
          <label className='text-gray-500 text-xl block mb-4' htmlFor={`${label}-currency`}>{label}</label>
          <input className='outline-none py-1 px-2 bg-gray-100 rounded-lg' type='number' id={`${label}-currency`} placeholder='Amount'
          value={amount}
          onChange={onAmountChange && onAmountChange}
          disabled={amountDisable}
          />
        </div>

        <div className=''>
          <p className='text-gray-500 text-xl mb-4'>Currency Type</p>
          <select className='rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none' name="currency" value= {selectCurrency} onChange={onCurrencyChange && onCurrencyChange}>
            {currencyArray.map((currency) => (
              <option value={currency} key={currency}>{currency}</option>
            ))}
          </select>
        </div>

      </div>
    </div>
  )
}

export default InputBox;