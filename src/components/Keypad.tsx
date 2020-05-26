import React from "react"
import { NumberButton, OperatorButton, KeypadButton } from "./KeypadButton"
import { DigitChar, DecimalChar, OperatorChar } from "../types/calctypes"

interface KeypadProps {
  className?: "string"
  onDigit?: (label: DigitChar) => void
  onDecimal?: (label: DecimalChar) => void
  onOperator?: (label: OperatorChar) => void
  onSubmit?: () => void
}

function Keypad({
  className,
  onDigit,
  onDecimal,
  onOperator,
  onSubmit,
  ...props
}: KeypadProps): JSX.Element {
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
      <OperatorButton label="*" title="Multiply" onOperator={onOperator} />
      <OperatorButton label="/" title="Divide" onOperator={onOperator} />
      <OperatorButton label="+" title="Add" onOperator={onOperator} />
      <OperatorButton label="-" title="Subtract" onOperator={onOperator} />
      <KeypadButton
        label=","
        title="Decimal"
        onClick={(): void => onDecimal?.(",")}
      />
      <KeypadButton
        label="="
        title="Equals"
        className="equalsButton"
        onClick={onSubmit}
      />
    </div>
  )
}

export default Keypad
