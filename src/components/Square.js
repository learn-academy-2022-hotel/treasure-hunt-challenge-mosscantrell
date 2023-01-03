import React from "react"

// instead of using "props", use "{meaningfulName}" to keep the code more succinct moving forward. this allows you to just call the name rather than having to define each name with its own const
const Square = ({square, index, handleGamePlay}) => {

  const handleClick = () => {
    // the index is passed from App.js where it has been mapped alongside the square info, and now it is being alerted to so that the boxes "know" where they are so to speak
    handleGamePlay(index)
  }

  return (
    <>
      <div className="square" onClick={handleClick}>{square}</div>
    </>
  )
}
export default Square
