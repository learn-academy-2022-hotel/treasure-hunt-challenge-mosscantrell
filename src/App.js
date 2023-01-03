import React, { useState } from "react"
import "./App.css"
import Square from "./components/Square"

const App = () => {
  const [board, setBoard] = useState([
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?"
  ])

  const handleGamePlay = (clickedSquare) => {
    alert(clickedSquare)
  }

  return (
    <>
      <h1>Treasure Hunt Game</h1>
      {/* create a divider to contain the board so that css can be applied to the entire board, rather than each individual square */}
      <div className="board">
        {/* map over the array so that the nine squares are displayed dynamically, rather than having to code <Square /> nine separate times */}
        {board.map((square, index) => {
          // call upon square in the component call so that the data from the array is passed to the board
          return <Square 
            square={square} 
            index={index} 
            handleGamePlay={handleGamePlay}
          />
        })}
      </div>
    </>
  )
}

export default App
