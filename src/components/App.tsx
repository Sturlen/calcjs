import React from "react"
import "./App.css"
import Keypad from "./Keypad"
import InputBox from "./InputBox"
import useCalcBindings from "../hooks/useCalcBindings"
import useCalculator, { inputArrayToString } from "../hooks/useCalculator"

/**
 * Calculator app
 * Uses tabindex to listen for keyboard events
 */
function App(): JSX.Element {
  const {
    state: { input, ongoing_operation, history },
    onDecimal,
    onDigit,
    onOperator,
    onSubmit,
  } = useCalculator()

  // Keyboard Bindings
  const [AppRef, onKeyDown] = useCalcBindings({
    onDigit,
    onOperator,
    onDecimal,
    onSubmit,
  })

  const input_string = inputArrayToString(input)

  return (
    <div
      className="app appGrid"
      onKeyDown={onKeyDown}
      tabIndex={0}
      ref={AppRef}
    >
      <InputBox
        value={input_string}
        operator={ongoing_operation}
        history={history}
      />
      <Keypad
        onDigit={onDigit}
        onDecimal={onDecimal}
        onOperator={onOperator}
        onSubmit={onSubmit}
      />
    </div>
  )
}

export default App
