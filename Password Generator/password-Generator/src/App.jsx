import React from 'react';
import { useState, useEffect, useRef, useCallback } from 'react';
import './App.css'

function App() {

  const [length, setLength] = useState(8);
  const [numbersAllowed, setNumbersAllowed] = useState(false);
  const [charactersAllowed, setCharactersAllowed] = useState(false);
  const [password, setPassword] = useState('');

  const passwordRef = useRef();


  const passwordGenerate = useCallback(() => {
    let pwd = '';
    let str = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if(numbersAllowed){
      str = str + '0123456789';
    }
    if(charactersAllowed){
      str = str + '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~';
    }

    for(let i = 1; i<=length; i++){
      let char = Math.floor(Math.random()*str.length);
      pwd = pwd + str.charAt(char);
    }

    setPassword(pwd); 
  },[length, numbersAllowed, charactersAllowed]);

  
  useEffect(() => {
    passwordGenerate();
  },[length, numbersAllowed, charactersAllowed, passwordGenerate]);


  const copyPassword = () => {
    passwordRef.current.select();
    window.navigator.clipboard.writeText(passwordRef.current.value);
  }

  return (
    <>
      <div className='w-full h-screen relative flex justify-center items-center'>
        <div className='mt-8 absolute top-[10%]'>
          <h1 className='text-white text-4xl text-center font-semibold'>Password Generator</h1>
        </div>

        {/*----------- password input field -----------------*/}
        <div className='w-1/2 h-1/4 p-8 rounded-lg bg-black shadow-md'>
          <div className=' relative'>
            <input className='w-[80%] h-12 px-2 text-xl text-red-600 font-medium rounded-l-md outline-none' 
            type="text"
            readOnly
            value={password} 
            ref={passwordRef} />
            {/*----------- copy button -------------*/}
            <button className='bg-indigo-700 absolute top-0 text-white h-12 w-20 rounded-r-md active:bg-indigo-500 hover:bg-indigo-900 duration-200' 
            type="button"
            onClick={(copyPassword)}
            >Copy</button>

          </div>
          {/*------------ other input fields -------------------*/}
          <div className='p-4 pl-0 mt-2 flex gap-[2rem]'>

            <div className='w-[15.8rem]'>
              <input className='cursor-pointer' type="range" name="length" id='range' min={6} max={30} value={length}
              onChange={(event) => {setLength(event.target.value)}}  />
              <label htmlFor="range" className='text-green-500 text-xl ml-2'>Length ({length})</label>
            </div>

            <div>
              <input type="checkbox" name="numbers" id="number"
              defaultChecked= {numbersAllowed}
              onChange={() => {
                setNumbersAllowed((prevState) => !prevState);
              }} />
              <label htmlFor="number" className='text-green-500 text-xl ml-2'>Numbers</label>
            </div>

            <div>
              <input type="checkbox" name="characters" id="character"
              defaultChecked = {charactersAllowed}
              onChange={() => {
                setCharactersAllowed((prevState) => !prevState);
              }} />
              <label htmlFor="character" className='text-green-500 text-xl ml-2'>Characters</label>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App;
