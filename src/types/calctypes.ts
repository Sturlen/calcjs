export type OperatorChar = "/" | "*" | "+" | "-"

export type DigitChar =
  | "0"
  | "1"
  | "2"
  | "3"
  | "4"
  | "5"
  | "6"
  | "7"
  | "8"
  | "9"

export type DecimalChar = "," | "."

export type SubmitKey = "Enter" | " "

export type KepadKey = DigitChar | OperatorChar | DecimalChar | SubmitKey

//HTML

export type HTMLRefObject =
  | string
  | ((instance: HTMLDivElement | null) => void)
  | React.RefObject<HTMLDivElement>
  | null
  | undefined

export type HTMLKeyboardEvent = (
  event: React.KeyboardEvent<HTMLElement>
) => void
