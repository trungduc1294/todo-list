const ToggleBtn = ({toggleBtn, setToggleBtn}) => {
  return (
    <button
      onClick={() => setToggleBtn(!toggleBtn)}
    >
      Toggle
    </button>
  )
}

export default ToggleBtn