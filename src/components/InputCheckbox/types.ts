import { FunctionComponent } from "react"
import { SetTransactionApprovalFunction } from "../Transactions/types"
import { Transaction } from "src/utils/types"

type InputCheckboxProps = {
  id: string | number
  checked?: boolean
  onChange: (newValue: boolean) => void
  onClick: () => void;
  disabled?: boolean
  // setTransactionApproval: SetTransactionApprovalFunction
  // transaction: Transaction
}

export type InputCheckboxComponent = FunctionComponent<InputCheckboxProps>
