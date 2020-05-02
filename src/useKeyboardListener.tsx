import React, { useRef, useEffect } from "react"

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
function useKeyboardListener(): [HTMLRefObject, HTMLKeyboardEvent] {
  const RootRef: HTMLRefObject = useRef(null)

  useEffect(() => {
    if (document.activeElement === document.body && RootRef.current)
      RootRef.current.focus()
  })

  const handleKeyDown = (event: React.KeyboardEvent<HTMLElement>): void => {
    if (event.key) {
      console.log("key", event.key, event.keyCode, event.charCode)
    }
  }
  return [RootRef, handleKeyDown]
}

export default useKeyboardListener
