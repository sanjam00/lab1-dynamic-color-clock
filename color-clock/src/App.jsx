import { useState } from 'react'
import './App.css'
import { Clock } from './components/Clock.jsx'

function App() {
  const [color, setColor] = useState('#fff');
  const [date, setDate] = useState(new Date());

  function handleColorChange(e) {
    console.log(`App().handleColorChange(${e.target.value})`, e);
    setColor(e.target.value);
  }

  setInterval(() => {
    setDate(new Date());
  }, 1);

  return (
    <>
      <Clock date={date} color={color} onColorChange={handleColorChange} />
    </>
  )
}

export default App