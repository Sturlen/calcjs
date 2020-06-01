import React from "react"

interface InputBoxProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string
  history?: string
  operator?: string
  value: string
}

function InputBox({
  value,
  className,
  history,
  operator,
  ...props
}: InputBoxProps): JSX.Element {
  return (
    <div className={className ?? "inputBox"} {...props}>
      <div className="historyRow">
        <p title="history">{history ?? "history"}</p>
      </div>
      <div className="inputRow">
        <h2 className="operatorText">{operator || "o"}</h2>
        <h2 className="inputText" title="Result">
          {value || 0}
        </h2>
      </div>
    </div>
  )
}

export default InputBox
