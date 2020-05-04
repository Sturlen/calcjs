import React from "react"
import { DigitChar } from "../types/calctypes"

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

function KeypadButton({
  disabled,
  label,
  className,
  ...props
}: KeypadButtonProps): JSX.Element {
  return (
    <button
      className={`keypadButton${className ? " " + className : ""}`}
      disabled={disabled ?? false}
      {...props}
    >
      <p>{label ?? ""}</p>
    </button>
  )
}

function ActionButton({ onClick, ...props }: ActionButtonProps): JSX.Element {
  return (
    <KeypadButton
      onClick={onClick}
      onMouseDown={(e): void => e.preventDefault()}
      className={"actionButton"}
      {...props}
    />
  )
}

/**
 * Button whicj returns the number on the button when clicked.
 */
function NumberButton({
  label,
  onDigit,
  ...props
}: NumberButtonProps): JSX.Element {
  return (
    <KeypadButton
      onClick={(e): void => {
        onDigit?.(label)
      }}
      onMouseDown={(e): void => e.preventDefault()}
      label={label}
      className={"numberButton"}
      {...props}
    />
  )
}

export { KeypadButton, ActionButton, NumberButton }
