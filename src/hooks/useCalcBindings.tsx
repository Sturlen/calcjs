import useKeyboardBindings, { KeyboardEvents } from "./useKeyboardBindings"
import {
  DigitChar,
  OperatorChar,
  SubmitKey,
  DecimalChar,
  HTMLRefObject,
  HTMLKeyboardEvent,
} from "../types/calctypes"

export interface CalcBindings {
  onDigit?: (dig: DigitChar) => void
  onOperator?: (op: OperatorChar) => void
  onDecimal?: (dec: DecimalChar) => void
  onSubmit?: (key: SubmitKey) => void
}

/**
 * Defines keyboardbinding for all basic calculator actions
 */
export default function useCalcBindings({
  onDigit,
  onOperator,
  onDecimal,
  onSubmit,
}: CalcBindings): [HTMLRefObject, HTMLKeyboardEvent] {
  const bindings: KeyboardEvents = new Map([
    [
      "0",
      (): void => {
        onDigit?.("0")
      },
    ],
    [
      "1",
      (): void => {
        onDigit?.("1")
      },
    ],
    [
      "2",
      (): void => {
        onDigit?.("2")
      },
    ],
    [
      "3",
      (): void => {
        onDigit?.("3")
      },
    ],
    [
      "4",
      (): void => {
        onDigit?.("4")
      },
    ],
    [
      "5",
      (): void => {
        onDigit?.("5")
      },
    ],
    [
      "6",
      (): void => {
        onDigit?.("6")
      },
    ],
    [
      "7",
      (): void => {
        onDigit?.("7")
      },
    ],
    [
      "8",
      (): void => {
        onDigit?.("8")
      },
    ],
    [
      "9",
      (): void => {
        onDigit?.("9")
      },
    ],
    [
      "/",
      (): void => {
        onOperator?.("/")
      },
    ],
    [
      "*",
      (): void => {
        onOperator?.("*")
      },
    ],
    [
      "+",
      (): void => {
        onOperator?.("+")
      },
    ],
    [
      "-",
      (): void => {
        onOperator?.("-")
      },
    ],
    [
      ".",
      (): void => {
        onDecimal?.(".")
      },
    ],
    [
      ",",
      (): void => {
        onDecimal?.(",")
      },
    ],
    [
      "Enter",
      (): void => {
        onSubmit?.("Enter")
      },
    ],
    [
      " ",
      (): void => {
        onSubmit?.(" ")
      },
    ],
  ])

  return useKeyboardBindings(bindings)
}
