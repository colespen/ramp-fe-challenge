import { InputCheckbox } from "../InputCheckbox"
import { TransactionPaneComponent } from "./types"
import { useStore } from "src/hooks/useStore"

export const TransactionPane: TransactionPaneComponent = ({
  transaction,
  loading,
  setTransactionApproval: consumerSetTransactionApproval,
}) => {
  const [approved, setApproved] = useStore(transaction.id, transaction.approved)

  const handleOnChange = async (newValue: boolean) => {
    await consumerSetTransactionApproval({
      transactionId: transaction.id,
      newValue,
    })
    setApproved(newValue)
  }

  return (
    <div className="RampPane">
      <div className="RampPane--content">
        <p className="RampText">{transaction.merchant} </p>
        <b>{moneyFormatter.format(transaction.amount)}</b>
        <p className="RampText--hushed RampText--s">
          {transaction.employee.firstName} {transaction.employee.lastName} - {transaction.date}
        </p>
      </div>
      <InputCheckbox
        key={transaction.id}
        id={transaction.id}
        checked={approved}
        disabled={loading}
        onChange={handleOnChange}
      />
    </div>
  )
}

const moneyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
})
