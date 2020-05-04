import React from "react"
import { ActionButton, NumberButton } from "./KeypadButton"
import { DigitChar } from "../types/calctypes"

interface KeypadProps {
  className?: "string"
  onDigit?: (label: DigitChar) => void
}

function Keypad({ className, onDigit, ...props }: KeypadProps): JSX.Element {
  return (
    <div className={className ?? "keypadElem"} {...props}>
      <NumberButton label={"1"} onDigit={onDigit} />
      <NumberButton label={"2"} onDigit={onDigit} />
      <NumberButton label={"3"} onDigit={onDigit} />
      <NumberButton label={"4"} onDigit={onDigit} />
      <NumberButton label={"5"} onDigit={onDigit} />
      <NumberButton label={"6"} onDigit={onDigit} />
      <NumberButton label={"7"} onDigit={onDigit} />
      <NumberButton label={"8"} onDigit={onDigit} />
      <NumberButton label={"9"} onDigit={onDigit} />
      <NumberButton label={"0"} onDigit={onDigit} />
      <ActionButton label="*" title="Multiply" />
      <ActionButton label="/" title="Divide" />
      <ActionButton label="+" title="Add" />
      <ActionButton label="-" title="Subtract" />
      <ActionButton label="=" title="Equals" className="equalsButton" />
    </div>
  )
}

export default Keypad
