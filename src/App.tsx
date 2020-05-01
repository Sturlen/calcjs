import React from "react"
import logo from "./logo.svg"
import "./App.css"
import Keypad from "./Keypad"

function App(): JSX.Element {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Keypad />
      </header>
    </div>
  )
}

export default App
