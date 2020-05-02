import React, { useState } from "react"
import "./App.css"
import Keypad from "./Keypad"
import InputBox from "./InputBox"

function App(): JSX.Element {
  const [buffer, setBuffer] = useState("0")
  const handleNumber = (num: number): void => {
    setBuffer(buffer + num)
  }
  return (
    <div className="app appGrid">
      <InputBox value={buffer} />
      <Keypad onNumber={handleNumber} />
    </div>
  )
}

export default App
