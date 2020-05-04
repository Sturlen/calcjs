import React, { useRef, useEffect } from "react"
import { HTMLRefObject, HTMLKeyboardEvent } from "../types/calctypes"

export type KeyboardEvents = Map<string, () => void | null | undefined>

/**
 * Handle and trigger events based on which key was pressed.
 */
function useKeyboardBindings(
  map: KeyboardEvents
): [HTMLRefObject, HTMLKeyboardEvent] {
  const RootRef: HTMLRefObject = useRef(null)

  useEffect(() => {
    if (document.activeElement === document.body && RootRef.current)
      RootRef.current.focus() //select the root element, so that we can recieve events
  })

  const handleKeyDown = (event: React.KeyboardEvent<HTMLElement>): void => {
    map.get(event.key)?.() //call the function named "key"
  }
  return [RootRef, handleKeyDown]
}

export default useKeyboardBindings
