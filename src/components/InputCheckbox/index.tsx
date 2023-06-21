import classNames from "classnames"
import { useEffect, useRef, useState } from "react"
import { InputCheckboxComponent } from "./types"

export const InputCheckbox: InputCheckboxComponent = ({
  id,
  checked = false,
  disabled,
  onChange,
  onClick,
}) => {
  const { current: inputId } = useRef(`RampInputCheckbox-${id}`)

  const [isChecked, setIsChecked] = useState<boolean>(checked)

  console.log("isChecked:", isChecked)

  const handleClick = () => {
    setIsChecked(!isChecked)
  }

  useEffect(() => {
    setIsChecked(checked)
  }, [checked])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // setIsChecked(event.target.checked)
    onChange(e.target.checked)
  }

  return (
    <div className="RampInputCheckbox--container" data-testid={inputId} onClick={handleClick}>
      <label
        className={classNames("RampInputCheckbox--label", {
          "RampInputCheckbox--label-checked": isChecked,
          "RampInputCheckbox--label-disabled": disabled,
        })}
      />
      <input
        id={inputId}
        type="checkbox"
        className="RampInputCheckbox--input"
        checked={isChecked}
        disabled={disabled}
        onChange={handleInputChange}
      />
    </div>
  )
}
