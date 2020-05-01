import React from "react"
import { ActionButton, NumberButton } from "./KeypadButton"

interface KeypadProps {
  className?: "string"
}

function Keypad({ className, ...props }: KeypadProps): JSX.Element {
  const handleNumbers: (num: number) => void = (num): void => console.log(num)
  return (
    <div className={className ?? "keypadElem"} {...props}>
      <NumberButton label={1} onNumber={handleNumbers} disabled />
      <NumberButton label={2} onNumber={handleNumbers} />
      <NumberButton label={3} onNumber={handleNumbers} />
      <NumberButton label={4} onNumber={handleNumbers} />
      <NumberButton label={5} onNumber={handleNumbers} />
      <NumberButton label={6} onNumber={handleNumbers} />
      <NumberButton label={7} onNumber={handleNumbers} />
      <NumberButton label={8} onNumber={handleNumbers} />
      <NumberButton label={9} onNumber={handleNumbers} />
      <NumberButton label={0} onNumber={handleNumbers} />
      <ActionButton label="*" title="Multiply" />
      <ActionButton label="/" title="Divide" />
      <ActionButton label="+" title="Add" />
      <ActionButton label="-" title="Subtract" />
      <ActionButton label="=" title="Equals" className="equalsButton" />
    </div>
  )
}

export default Keypad
