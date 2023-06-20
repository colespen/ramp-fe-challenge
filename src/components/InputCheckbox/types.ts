import { FunctionComponent } from "react"

type InputCheckboxProps = {
  id: string | number
  checked?: boolean
  onChange: (newValue: boolean) => void
  onClick: () => void;
  disabled?: boolean
}

export type InputCheckboxComponent = FunctionComponent<InputCheckboxProps>
