import React, { useRef, useEffect } from "react"

type Operator = "/" | "*" | "+" | "-"

interface KeyboardEvents {
  onDigit?: (num: number) => void
  onOperator?: (op: Operator) => void
}

type HTMLRefObject =
  | string
  | ((instance: HTMLDivElement | null) => void)
  | React.RefObject<HTMLDivElement>
  | null
  | undefined
type HTMLKeyboardEvent = (event: React.KeyboardEvent<HTMLElement>) => void

/**
 * Handle and trigger events based on which key was pressed.
 */
function useKeyboardListener({
  onDigit,
}: KeyboardEvents): [HTMLRefObject, HTMLKeyboardEvent] {
  const RootRef: HTMLRefObject = useRef(null)

  useEffect(() => {
    if (document.activeElement === document.body && RootRef.current)
      RootRef.current.focus()
  })

  const handleKeyDown = (event: React.KeyboardEvent<HTMLElement>): void => {
    if (event.key.match(/^\d$/g)?.[0]) {
      console.log("num", event.key)
      onDigit?.(parseInt(event.key))
    } else if (event.key.match(/^=$|^Enter$/g)?.[0]) {
      console.log("submit", event.key)
    } else {
      console.log("default", event.key)
    }
  }
  return [RootRef, handleKeyDown]
}

export default useKeyboardListener
