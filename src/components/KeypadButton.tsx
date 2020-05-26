import React from "react"
import { DigitChar, OperatorChar } from "../types/calctypes"

interface KeypadButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  disabled?: boolean
  label?: string | number
}

interface NumberButtonProps extends KeypadButtonProps {
  label: DigitChar
  onDigit?: (label: DigitChar) => void
}

interface ActionButtonProps extends KeypadButtonProps {
  label?: string
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
}

interface OperatorButtonProps extends KeypadButtonProps {
  label: OperatorChar
  onOperator?: (op: OperatorChar) => void
}

/**
 * Button made to fit nicely in a keypad.
 */
function KeypadButton({
  disabled,
  label,
  className,
  ...props
}: KeypadButtonProps): JSX.Element {
  return (
    <button
      className={`keypadButton${className ? " " + className : ""}`}
      onMouseDown={(e): void => e.preventDefault()}
      disabled={disabled ?? false}
      {...props}
    >
      <p>{label ?? ""}</p>
    </button>
  )
}

/**
 * Returns the labeled number when clicked
 */
function NumberButton({
  label,
  onDigit,
  ...props
}: NumberButtonProps): JSX.Element {
  return (
    <KeypadButton
      onClick={(): void => {
        onDigit?.(label)
      }}
      label={label}
      className={"numberButton"}
      {...props}
    />
  )
}

/**
 *
 * Returns the labeled operator character when clicked
 */
function OperatorButton({
  label,
  onOperator,
  ...props
}: OperatorButtonProps): JSX.Element {
  return (
    <KeypadButton
      onClick={(): void => {
        onOperator?.(label)
      }}
      label={label}
      className={"operatorButton"}
      {...props}
    />
  )
}

export { KeypadButton, OperatorButton, NumberButton }
