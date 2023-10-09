import colorNames from "colornames"
import ToggleBtn from "./ToggleBtn"

const Input = ({colorValue, setColorValue, setHexColor, toggleBtn, setToggleBtn}) => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="">Add Color Name: </label>
      <input 
        type="text" 
        autoFocus
        placeholder="Add color name"
        required
        value={colorValue}
        onChange={(e) => {
          setColorValue(e.target.value)
          setHexColor(colorNames(e.target.value))
        }}
      />
      <ToggleBtn
        toggleBtn={toggleBtn}
        setToggleBtn={setToggleBtn}
      />
    </form>
    
  )
}

export default Input;