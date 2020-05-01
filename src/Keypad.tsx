import React from "react"
import { ActionButton, NumberButton } from "./KeypadButton"

function Keypad({}): JSX.Element {
  const handleNumbers: (num: number) => void = (num): void => console.log(num)
  return (
    <div>
      <NumberButton label={1} onNumber={handleNumbers} />
      <NumberButton label={2} onNumber={handleNumbers} />
      <NumberButton label={3} onNumber={handleNumbers} />
      <NumberButton label={4} onNumber={handleNumbers} />
      <NumberButton label={5} onNumber={handleNumbers} />
      <NumberButton label={6} onNumber={handleNumbers} />
      <NumberButton label={7} onNumber={handleNumbers} />
      <NumberButton label={8} onNumber={handleNumbers} />
      <NumberButton label={9} onNumber={handleNumbers} />
      <NumberButton label={0} onNumber={handleNumbers} />
      <ActionButton label="boi" />
    </div>
  )
}

export default Keypad
