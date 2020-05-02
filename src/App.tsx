import React, { useState } from "react"
import "./App.css"
import Keypad from "./Keypad"
import InputBox from "./InputBox"
import useKeyboardListener from "./useKeyboardListener"

/**
 * Calculator app
 * Uses tabindex to listen for keyboard events
 */
function App(): JSX.Element {
  const [buffer, setBuffer] = useState("0")
  const handleNumber = (num: number): void => {
    setBuffer(buffer + num)
  }

  const [AppRef, handleKeyDown] = useKeyboardListener()
  return (
    <div
      className="app appGrid"
      onKeyDown={handleKeyDown}
      tabIndex={0}
      ref={AppRef}
    >
      <InputBox value={buffer} />
      <Keypad onNumber={handleNumber} />
    </div>
  )
}

export default App
