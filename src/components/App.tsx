import React, { useState } from "react"
import "./App.css"
import Keypad from "./Keypad"
import InputBox from "./InputBox"
import useCalcBindings from "../hooks/useCalcBindings"
import { OperatorChar, DigitChar, InputChar } from "../types/calctypes"

function InputArrayToString(arr: InputChar[]): string {
  return arr.reduce((prev, char) => prev + char, "")
}

/**
 * Calculator app
 * Uses tabindex to listen for keyboard events
 */
function App(): JSX.Element {
  const [buffer, setBuffer] = useState<InputChar[]>([])

  const handleDigit = (num: DigitChar): void => {
    console.log("digit", num)
    const newBuffer: InputChar[] = [...buffer, num]
    setBuffer(newBuffer)
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
      <InputBox value={InputArrayToString(buffer)} />
      <Keypad onDigit={handleDigit} />
    </div>
  )
}

export default App
