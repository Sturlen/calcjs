import useKeyboardBindings, { KeyboardEvents } from "./useKeyboardBindings"
import {
  DigitChar,
  OperatorChar,
  SubmitKey,
  DecimalChar,
  HTMLRefObject,
  HTMLKeyboardEvent,
} from "../types/calctypes"

interface CalcBindings {
  handleDigit?: (dig: DigitChar) => void
  handleOperator?: (op: OperatorChar) => void
  handleDecimal?: (dec: DecimalChar) => void
  handleSubmit?: (key: SubmitKey) => void
}

function useCalcBindings({
  handleDigit,
  handleOperator,
  handleDecimal,
  handleSubmit,
}: CalcBindings): [HTMLRefObject, HTMLKeyboardEvent] {
  const bindings: KeyboardEvents = new Map([
    [
      "0",
      (): void => {
        handleDigit?.("0")
      },
    ],
    [
      "1",
      (): void => {
        handleDigit?.("1")
      },
    ],
    [
      "2",
      (): void => {
        handleDigit?.("2")
      },
    ],
    [
      "3",
      (): void => {
        handleDigit?.("3")
      },
    ],
    [
      "4",
      (): void => {
        handleDigit?.("4")
      },
    ],
    [
      "5",
      (): void => {
        handleDigit?.("5")
      },
    ],
    [
      "6",
      (): void => {
        handleDigit?.("6")
      },
    ],
    [
      "7",
      (): void => {
        handleDigit?.("7")
      },
    ],
    [
      "8",
      (): void => {
        handleDigit?.("8")
      },
    ],
    [
      "9",
      (): void => {
        handleDigit?.("9")
      },
    ],
    [
      "/",
      (): void => {
        handleOperator?.("/")
      },
    ],
    [
      "*",
      (): void => {
        handleOperator?.("*")
      },
    ],
    [
      "+",
      (): void => {
        handleOperator?.("+")
      },
    ],
    [
      "-",
      (): void => {
        handleOperator?.("-")
      },
    ],
    [
      ".",
      (): void => {
        handleDecimal?.(".")
      },
    ],
    [
      ",",
      (): void => {
        handleDecimal?.(",")
      },
    ],
    [
      "Enter",
      (): void => {
        handleSubmit?.("Enter")
      },
    ],
    [
      " ",
      (): void => {
        handleSubmit?.(" ")
      },
    ],
  ])

  return useKeyboardBindings(bindings)
}

export default useCalcBindings
