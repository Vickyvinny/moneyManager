// Write your code here
import './index.css'

const TransactionItem = props => {
  const {transactionDetails, deleteTransaction} = props
  const {id, Title, Amount, type} = transactionDetails
  const onDelete = () => {
    deleteTransaction(id)
  }

  return (
    <li className="table-header">
      <p className="transaction-caption">{Title}</p>
      <p className="transaction-caption amt">Rs {Amount}</p>
      <p className="transaction-caption amt">{type}</p>
      <div>
        <button
          type="button"
          className="delete"
          onClick={onDelete}
          data-testid="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png "
            alt="delete"
            className="delete-icon"
          />
        </button>
      </div>
    </li>
  )
}
export default TransactionItem
