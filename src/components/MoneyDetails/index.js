// Write your code here
import './index.css'

const MoneyDetails = props => {
  const {balanceAmount, incomeAmount, expensesAmount} = props

  return (
    <div className="main-container">
      <div className="container-1 container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png "
          alt="balance"
          className="img"
        />
        <div>
          <p className="balance">Your Balance</p>
          <p className="amount" data-testid="balanceAmount">
            Rs {balanceAmount}
          </p>
        </div>
      </div>

      <div className="container-2 container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
          className="img"
        />
        <div>
          <p className="balance">Your Income</p>
          <p className="amount" data-testid="incomeAmount">
            Rs {incomeAmount}
          </p>
        </div>
      </div>

      <div className="container-3 container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
          className="img"
        />
        <div>
          <p className="balance">Your Expenses</p>
          <p className="amount" data-testid="expensesAmount">
            RS {expensesAmount}
          </p>
        </div>
      </div>
    </div>
  )
}
export default MoneyDetails
