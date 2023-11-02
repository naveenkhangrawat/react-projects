import { useState } from 'react'
import './App.css'
import Button from './components/Button';

function App() {
  const [color, setColor] = useState('gray');

  function colorChanger(event) {  
    setColor(event.target.innerHTML);
  }

  return (
    <>
      <div className='relative flex justify-center items-end w-full h-screen duration-200'
      style={{backgroundColor: color}}>
        <div className='py-4 px-4 mb-4 flex gap-3 justify-center flex-wrap bg-cyan-400 rounded-full'>
          <Button btnText="Red" btnColor='Red' updateColor={colorChanger} />        
          <Button btnText="Blue" btnColor="blue" updateColor={colorChanger}/>
          <Button btnText="Green" btnColor='green' updateColor={colorChanger}/>
          <Button btnText="Lavender" btnColor='lavender' updateColor={colorChanger}/>
          <Button btnText="Black" btnColor='black' updateColor={colorChanger}/>
          <Button btnText="Yellow" btnColor='yellow' updateColor={colorChanger}/>
          <Button btnText="Pink" btnColor='pink' updateColor={colorChanger}/>
          <Button btnText="Orange" btnColor='orange' updateColor={colorChanger}/>         
        </div>
      </div>
    </>
  )
}

export default App;
