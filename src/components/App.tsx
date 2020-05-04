import React, { useState } from "react"
import "./App.css"
import Keypad from "./Keypad"
import InputBox from "./InputBox"
import useCalcBindings from "../hooks/useCalcBindings"
import { OperatorChar, DigitChar } from "../types/calctypes"

/**
 * Calculator app
 * Uses tabindex to listen for keyboard events
 */
function App(): JSX.Element {
  const [buffer, setBuffer] = useState("0")
  const handleNumber = (num: number): void => {
    setBuffer(buffer + num)
  }

  const handleDigit = (num: DigitChar): void => {
    console.log("digit", num)
    setBuffer(buffer + num)
  }

  const handleOperator = (op: OperatorChar): void => {
    console.log("op", op)
  }

  const [AppRef, handleKeyDown] = useCalcBindings({
    handleDigit,
    handleOperator,
  })
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
