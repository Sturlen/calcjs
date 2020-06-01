import React from "react"
import { render } from "@testing-library/react"
import App from "./App"
import { act } from "react-dom/test-utils"

test("renders without crashing", () => {
  const { getByText } = render(<App />)
  const inputBox = getByText(/1/i)
  expect(inputBox).toBeInTheDocument()
})

test("One plus Two equals Three", async () => {
  const { findByText, findByTitle } = render(<App />)

  const onebutton = await findByText("1")
  const twobutton = await findByText("2")
  const plusbutton = await findByText("+")
  const equalsbutton = await findByText("=")
  const inputbox = await findByTitle(/result/i)
  const historybox = await findByTitle(/history/i)

  act(() => {
    onebutton.click()
  })
  expect(inputbox.textContent).toBe("1")

  act(() => {
    plusbutton.click()
  })
  expect(inputbox.textContent).toBe("1")
  expect(historybox.textContent).toBe("1+")

  act(() => {
    twobutton.click()
  })
  expect(inputbox.textContent).toBe("2")
  expect(historybox.textContent).toBe("1+")

  act(() => {
    equalsbutton.click()
  })

  expect(inputbox.textContent).toBe("3")
  expect(historybox.textContent).toBe("1+2=")
})
