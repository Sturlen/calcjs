import React from "react"
import BigNumber from "bignumber.js"

interface InputBoxProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string
  history?: string
  value: string
}

function InputBox({
  value,
  className,
  history,
  ...props
}: InputBoxProps): JSX.Element {
  return (
    <div className={className ?? "inputBox"} {...props}>
      <div className="historyRow">
        <p>{history ?? "history"}</p>
      </div>
      <div className="inputRow">
        <h2>{new BigNumber(value).toFormat()}</h2>
      </div>
    </div>
  )
}

export default InputBox
