const Square = ({colorValue, hexColor, toggleBtn}) => {
  return (
    <section
      className="square"
      style={{
        backgroundColor: colorValue,
        color: toggleBtn ? "black" : "white"
      }}
    >
      <p>
        {colorValue ? colorValue : "Empty Value"}
      </p>
      <p>{hexColor ? hexColor : null}</p>
    </section>
  )
}

Square.defaultProps = {
  colorValue: "Empty Value"
}

export default Square;