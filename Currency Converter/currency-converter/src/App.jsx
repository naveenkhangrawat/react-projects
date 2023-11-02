import { useState } from 'react'
import useCurrencyInfo from './customHooks/useCurrencyInfo';
import './App.css'
import InputBox from './components/InputBox';

function App() {

  const [amount, setAmount] = useState(0);
  const [to, setTo] = useState("inr");
  const [from, setFrom] = useState("usd");
  const [result, setResult] = useState(0);

  const currencyInfo = useCurrencyInfo(from);
  const currencyOptions = Object.keys(currencyInfo); 

  function amountChange(event) {
    setAmount(event.target.value);
  }

  function fromCurrencyChange(event) {
    setFrom(event.target.value);
  }
  function toCurrencyChange(event) {
    setTo(event.target.value);
  }

  function convertCurrency() {
    setResult(amount*currencyInfo[to]);
  }

  function swap() {
    setFrom(to);
    setTo(from);
    setAmount(result);
    setResult(amount);
  }

  return (
    <>
      <div className='w-full h-screen bg-cover flex justify-center items-center' style={{backgroundImage: "url('https://images.pexels.com/photos/3532540/pexels-photo-3532540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')"}}>
        <div className='w-1/2 p-6 border border-gray-60 rounded-lg bg-white/30 backdrop-blur-sm'>
          <form action="" onSubmit={(event) => {
            event.preventDefault();
            convertCurrency();
          }}>

            <div className='w-full relative'>
              <div className='w-full mb-3'>
                <InputBox 
                label='From'
                onAmountChange={amountChange}
                amount={amount}
                currencyArray={currencyOptions}
                selectCurrency = {from}
                onCurrencyChange = {fromCurrencyChange}
                amountDisable = {false}
                />
              </div>
              <div>
                <InputBox 
                label='To'
                onAmountChange={null}
                amount={result}
                currencyArray={currencyOptions}
                selectCurrency = {to}
                onCurrencyChange={toCurrencyChange}
                amountDisable = {true}
                />
              </div>

              <button className='absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] bg-indigo-600 px-4 py-2 rounded-lg text-white text-lg outline hover:bg-indigo-700 duration-100 active:scale-[0.98]' type="button" onClick={swap}>Swap</button>
            </div> 

            <div>
              <button className='w-full text-center text-xl text-white bg-indigo-600 py-3 rounded-lg mt-4 hover:bg-indigo-700 duration-100 active:scale-[0.98]' type="submit">Convert {from.toUpperCase()} to {to.toUpperCase()}</button>
            </div>        

          </form>
        </div>

      </div>
    </>
  )
}

export default App;
