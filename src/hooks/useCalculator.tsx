import { useReducer, useCallback } from "react"
import { produce } from "immer"
import {
  OperatorChar,
  DigitChar,
  DecimalChar,
  InputChar,
} from "../types/calctypes"

export interface CalcHook {
  onDigit?: (label: DigitChar) => void
  onDecimal?: (label: DecimalChar) => void
  onOperator?: (label: OperatorChar) => void
  onSubmit?: () => void
  state: CalcState
}

const DEFAULT_DECIMAL_CHAR = ","

/**
 * Entire state used by the calculator
 */
interface CalcState {
  input: InputChar[]
  input_is_invalid: boolean
  history: string
  result?: string
  ongoing_operation?: OperatorChar
}

/**
 * All actions that can be performed on the calculator state
 */
type CalcAction =
  | { type: "operator"; op: OperatorChar }
  | { type: "digit"; num: DigitChar }
  | { type: "decimal"; dec: DecimalChar }
  | { type: "submit" }

const initial_state: CalcState = {
  input: [],
  input_is_invalid: false,
  history: "",
  result: undefined,
  ongoing_operation: undefined,
}

function reducer(state: CalcState, action: CalcAction): CalcState {
  // Uses produce to ensure state is immutable and reduce erros
  return produce(state, (draft) => {
    // Throws error if you attempt to mutate actual state, instead of the draft
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const state = null

    switch (action.type) {
      case "digit":
        console.log("dig", action.num)
        draft.input.push(action.num)
        break
      case "operator":
        console.log("op", action.op)
        draft.ongoing_operation = action.op
        break
      case "decimal":
        console.log("decimal", action.dec)
        draft.input.push(DEFAULT_DECIMAL_CHAR)
        break
      case "submit":
        console.log("submit")
        break

      default:
        throw new Error("Action not recognized: " + action)
    }
  })
}

/**
 * Contains calculator state.
 */
export default function useCalculator(): CalcHook {
  const [state, dispatch] = useReducer(reducer, initial_state)

  return {
    onDigit: useCallback((num: DigitChar) => {
      dispatch({ type: "digit", num })
    }, []),
    onOperator: useCallback((op: OperatorChar) => {
      dispatch({ type: "operator", op })
    }, []),
    onDecimal: useCallback((dec: DecimalChar) => {
      dispatch({ type: "decimal", dec })
    }, []),
    onSubmit: useCallback(() => {
      dispatch({ type: "submit" })
    }, []),
    state,
  }
}

export function inputArrayToString(arr: InputChar[]): string {
  return arr.reduce((prev, char) => prev + char, "")
}
