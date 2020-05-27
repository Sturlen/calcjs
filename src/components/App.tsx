import React, { useState } from "react"
import "./App.css"
import Keypad from "./Keypad"
import InputBox from "./InputBox"
import useCalcBindings from "../hooks/useCalcBindings"
import {
  OperatorChar,
  InputChar,
  DecimalChar,
  CalcToken,
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
  const [calculation, setCalculation] = useState<CalcToken[]>([])
  // TODO: STATE Is Showing Results

  const addNumberToCalc = (num: InputChar[]): void => {
    const newtoken: CalcToken = {
      value: num.join(""),
      type: "number",
    }
    const newcalc: CalcToken[] = [...calculation, newtoken]
    setCalculation(newcalc)
  }

  const addOperatorToCalc = (op: string): void => {
    const newtoken: CalcToken = {
      value: op,
      type: "operator",
    }
    const newcalc: CalcToken[] = [...calculation, newtoken]
    setCalculation(newcalc)
  }

  const calculationAsString = (): string => {
    if (calculation.length > 0) {
      return calculation.reduce(
        (tokens, current_token) => tokens + current_token.value,
        ""
      )
    } else {
      return ""
    }
  }
  const calc_string = calculationAsString()

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
    addOperatorToCalc(op)
  }

  const handleSubmit = (): void => {
    console.log("submit")
    addNumberToCalc(input)
    setInput([])
    // TODO: add operator to calculation
    setOngoingOperation(undefined)
    // TODO: Display result the math
  }

  // TODO: Handle Clear

  // Keyboard Bindings
  const [AppRef, handleKeyDown] = useCalcBindings({
    handleDigit,
    handleOperator,
    handleDecimal,
    handleSubmit,
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
        history={calc_string}
      />
      <Keypad
        onDigit={handleDigit}
        onDecimal={handleDecimal}
        onOperator={handleOperator}
        onSubmit={handleSubmit}
      />
    </div>
  )
}

export default App
