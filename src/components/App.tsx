import React, { useState } from "react"
import "./App.css"
import Keypad from "./Keypad"
import InputBox from "./InputBox"
import useCalcBindings from "../hooks/useCalcBindings"
import {
  OperatorChar,
  DigitChar,
  InputChar,
  DecimalChar,
} from "../types/calctypes"

function InputArrayToString(arr: InputChar[]): string {
  return arr.reduce((prev, char) => prev + char, "")
}

/**
 * Calculator app
 * Uses tabindex to listen for keyboard events
 */
function App(): JSX.Element {
  const [input, setInput] = useState<InputChar[]>([])
  const [ongoing_operation, setOngoingOperation] = useState<OperatorChar>()
  const hasDecimalChar = (): boolean => {
    return !!input.find((char) => char === "," || char === ".")
  }

  const handleDigit = (num: InputChar): void => {
    console.log("digit", num)

    const newinput: InputChar[] = [...input, num]
    setInput(newinput)
  }

  const handleDecimal = (char: DecimalChar): void => {
    console.log("char", char)
    if (!hasDecimalChar()) {
      handleDigit(char)
    } else {
      console.log("Decimal already exists")
    }
  }

  const handleOperator = (op: OperatorChar): void => {
    console.log("op", op)
    setOngoingOperation(op)
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
      <InputBox
        value={InputArrayToString(input)}
        operator={ongoing_operation}
      />
      <Keypad onDigit={handleDigit} onDecimal={handleDecimal} />
    </div>
  )
}

export default App
