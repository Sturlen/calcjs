import React from "react"
import "./App.css"
import Keypad from "./Keypad"
import InputBox from "./InputBox"

function App(): JSX.Element {
  return (
    <div className="app appGrid">
      <InputBox value={0} />
      <Keypad />
    </div>
  )
}

export default App
