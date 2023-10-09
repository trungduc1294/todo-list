import { useState } from 'react'
import Square from './Square'
import Input from './Input'
import ToggleBtn from './ToggleBtn'

function App() {
  const [color, setColor] = useState('')
  const [hexColor, setHexColor] = useState('')
  const [toggleBtn, setToggleBtn] = useState(true)

  return (
    <div className="App">
      <Square
        colorValue={color}
        hexColor={hexColor}
        toggleBtn={toggleBtn}
      />
      <Input
        colorValue={color}
        setColorValue={setColor}
        setHexColor={setHexColor}
        toggleBtn={toggleBtn}
        setToggleBtn={setToggleBtn}
      />
    </div>
  )
}

export default App
