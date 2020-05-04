import React from "react"
import { ActionButton, NumberButton } from "./KeypadButton"

interface KeypadProps {
  className?: "string"
  onNumber?: (num: number) => void
}

function Keypad({ className, onNumber, ...props }: KeypadProps): JSX.Element {
  return (
    <div className={className ?? "keypadElem"} {...props}>
      <NumberButton label={1} onNumber={onNumber} />
      <NumberButton label={2} onNumber={onNumber} />
      <NumberButton label={3} onNumber={onNumber} />
      <NumberButton label={4} onNumber={onNumber} />
      <NumberButton label={5} onNumber={onNumber} />
      <NumberButton label={6} onNumber={onNumber} />
      <NumberButton label={7} onNumber={onNumber} />
      <NumberButton label={8} onNumber={onNumber} />
      <NumberButton label={9} onNumber={onNumber} />
      <NumberButton label={0} onNumber={onNumber} />
      <ActionButton label="*" title="Multiply" />
      <ActionButton label="/" title="Divide" />
      <ActionButton label="+" title="Add" />
      <ActionButton label="-" title="Subtract" />
      <ActionButton label="=" title="Equals" className="equalsButton" />
    </div>
  )
}

export default Keypad
