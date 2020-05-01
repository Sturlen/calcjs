import React from "react"

interface KeypadButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  disabled?: boolean
  label?: string | number
}

interface NumberButtonProps extends KeypadButtonProps {
  label: number
  onNumber?: (num: number) => void
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
  onNumber,
  ...props
}: NumberButtonProps): JSX.Element {
  const handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void = (
    event
  ) => {
    event.preventDefault()
    onNumber?.(label) // Only execute if function exitst
  }
  return (
    <KeypadButton
      onClick={handleClick}
      onMouseDown={(e): void => e.preventDefault()}
      label={label}
      className={"numberButton"}
      {...props}
    />
  )
}

export { KeypadButton, ActionButton, NumberButton }
