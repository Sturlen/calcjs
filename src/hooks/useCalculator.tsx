import { useReducer, useCallback } from "react"
import { produce } from "immer"
import {evaluate} from "mathjs"
import {
  OperatorChar,
  DigitChar,
  DecimalChar,
  InputChar,
} from "../types/calctypes"

export function inputArrayToString(arr: InputChar[]): string {
  return arr.reduce((prev, char) => prev + char, "")
}

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
  has_decimal: boolean
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
  has_decimal: false
}

function reducer(state: CalcState, action: CalcAction): CalcState {
  // Uses produce to ensure state is immutable and reduce erros
  return produce(state, (draft) => {
    // Throws error if you attempt to mutate actual state, instead of the draft
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const state = null

    const resetInput = (): void => {
      draft.input = []
      draft.ongoing_operation = undefined
      draft.has_decimal = false
    }

    switch (action.type) {
      case "digit":
        console.log("dig", action.num)
        draft.input.push(action.num)
        delete draft.result
        break
      case "operator":
        console.log("op", action.op)
        draft.input.push(action.op)
        delete draft.result
        break
      case "decimal":
        console.log("decimal", action.dec)
        
        if (!draft.has_decimal) {
          draft.input.push(DEFAULT_DECIMAL_CHAR)
          draft.has_decimal = true
        }
        delete draft.result
        break
      case "submit":
        console.log("submit")
        const input_expr = inputArrayToString(draft.input)
        resetInput()
        try {
          draft.result = evaluate(input_expr)
          draft.history = input_expr
        } catch (error) {
          draft.result = "Error"
        }
        
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


