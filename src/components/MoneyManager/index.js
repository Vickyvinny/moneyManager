import {v4} from 'uuid'
import {Component} from 'react'
import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'

import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

// Write your code here
class MoneyManager extends Component {
  state = {
    title: '',
    amount: '',
    transactionList: [],
    optionId: transactionTypeOptions[0].optionId,
  }

  deleteTransaction = id => {
    const {transactionList} = this.state
    const filteredList = transactionList.filter(eachList => eachList.id !== id)
    this.setState({transactionList: filteredList})
  }

  onTransaction = event => {
    event.preventDefault()
    const {title, amount, optionId} = this.state
    const typeOption = transactionTypeOptions.find(
      eachTransaction => eachTransaction.optionId === optionId,
    )
    const {displayText} = typeOption
    const newTransaction = {
      id: v4(),
      Title: title,
      Amount: parseInt(amount),
      type: displayText,
    }
    this.setState(prevState => ({
      transactionList: [...prevState.transactionList, newTransaction],
      title: '',
      amount: '',
      optionId: transactionTypeOptions[0].optionId,
    }))
  }

  onChangeTitleInput = event => {
    this.setState({title: event.target.value})
  }

  onChangeAmountInput = event => {
    this.setState({amount: event.target.value})
  }

  onChangeSelect = event => {
    this.setState({optionId: event.target.value})
  }

  getExpenses = () => {
    const {transactionList} = this.state
    let expensesAmount = 0
    transactionList.forEach(eachValue => {
      if (eachValue.type === transactionTypeOptions[1].displayText) {
        expensesAmount += eachValue.Amount
      }
    })
    return expensesAmount
  }

  getIncome = () => {
    const {transactionList} = this.state
    let incomeAmount = 0
    transactionList.forEach(eachValue => {
      if (eachValue.type === transactionTypeOptions[0].displayText) {
        incomeAmount += eachValue.Amount
      }
    })
    return incomeAmount
  }

  getBalance = () => {
    const {transactionList} = this.state
    let balanceAmount = 0
    let incomeAmount = 0
    let expensesAmount = 0
    transactionList.forEach(eachValue => {
      if (eachValue.type === transactionTypeOptions[0].displayText) {
        incomeAmount += eachValue.Amount
      } else {
        expensesAmount += eachValue.Amount
      }
    })
    balanceAmount = incomeAmount - expensesAmount
    return balanceAmount
  }

  render() {
    const {title, amount, transactionList, optionId} = this.state
    const balanceAmount = this.getBalance()
    const incomeAmount = this.getIncome()
    const expensesAmount = this.getExpenses()
    return (
      <div className="app-container">
        <div className="top-container">
          <h1 className="name">Hi, Vicky</h1>
          <p className="caption">
            Welcome back to your
            <span className="sub-caption"> Money Manager</span>
          </p>
        </div>
        <div className="middle-container">
          <MoneyDetails
            balanceAmount={balanceAmount}
            incomeAmount={incomeAmount}
            expensesAmount={expensesAmount}
          />
        </div>
        <div className="bottom-container">
          <div className="transaction-container">
            <form className="form" onSubmit={this.onTransaction}>
              <h1 className="heading">Add Transaction</h1>
              <label htmlFor="title" className="label">
                TITLE
              </label>
              <input
                type="text"
                id="title"
                onChange={this.onChangeTitleInput}
                className="input"
                placeholder="TITLE"
                value={title}
              />
              <label htmlFor="amount" className="label">
                AMOUNT
              </label>
              <input
                type="text"
                id="amount"
                placeholder="AMOUNT"
                onChange={this.onChangeAmountInput}
                className="input"
                value={amount}
              />
              <label htmlFor="type" className="label">
                TYPE
              </label>
              <select
                id="type"
                onChange={this.onChangeSelect}
                className="input"
                value={optionId}
              >
                {transactionTypeOptions.map(eachOption => (
                  <option key={eachOption.optionId} value={eachOption.optionId}>
                    {eachOption.displayText}
                  </option>
                ))}
              </select>
              <div>
                <button type="submit" className="add-button">
                  Add
                </button>
              </div>
            </form>
          </div>

          <div className="history-container">
            <h1 className="transaction-heading">History</h1>
            <div className="transaction-table-container">
              <ul className="transaction-table">
                <li className="table-header">
                  <p className="col-caption">Title</p>
                  <p className="col-caption">Amount</p>
                  <p className="col-caption">Type</p>
                </li>
                {transactionList.map(eachTransaction => (
                  <TransactionItem
                    key={eachTransaction.id}
                    transactionDetails={eachTransaction}
                    deleteTransaction={this.deleteTransaction}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default MoneyManager
