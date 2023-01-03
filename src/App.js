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

  const [treasureLocation, setTreasureLocation] = useState(Math.floor(Math.random() * board.length))

  const [bombLocation, setBombLocation] = useState(Math.floor(Math.random() * board.length))

  const winAndLose = (specifiedSquares) => {
    let win = [treasureLocation]
    win[specifiedSquares] = "🌸"
    setTreasureLocation(win)

    let loss = [bombLocation]
    loss[specifiedSquares] = "🥀"
    setBombLocation(loss)
  }

  const handleGamePlay = (clickedSquare) => {
    // use setBoard here to update the useState from the default "?". clickedSquare is already attached to the index of the clicked box, so by passing that to updateBoard, setBoard knows what to change the value within the clicked box to
    let updateBoard = [...board]
    updateBoard[clickedSquare] = "🌳"
    setBoard(updateBoard)
  }

  console.log(treasureLocation)
  console.log(bombLocation)
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
            winAndLose={winAndLose}
          />
        })}
      </div>
    </>
  )
}

export default App
