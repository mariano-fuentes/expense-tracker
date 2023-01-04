import './ExpenseForm.css'
import { useState } from 'react'

const ExpenseForm = ({ addExpense, showExpenseToggle })=> {
const [title, setTitle] = useState('')
const [amount, setAmount] = useState(0)
const [date, setDate] = useState('')

const submitHandler = (e)=> {
  e.preventDefault()
  const formatedDate = new Date(date)
  addExpense({
    title,
    amount,
    date: formatedDate,
    id: Math.random()
  })
  setTitle('')
  setAmount(0)
  setDate('')
  showExpenseToggle()
}

const titleChangeHandler = (e)=>{
  const newTitle = e.target.value
  setTitle(newTitle)
}
const amountChangeHandler = (e)=>{
  const newAmount = e.target.value
  setAmount(newAmount)
}
const dateChangeHandler = (e)=>{
  const newDate = e.target.value
  setDate(newDate)
}

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input 
            value={title}
            type="text" 
            onChange={titleChangeHandler}/>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input 
            value={amount}
            type="number" 
            min="0.01"
            step="0.01" 
            onChange={amountChangeHandler}/>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input 
            value={date}
            type="date" 
            min="2021-01-01" 
            max="2023-12-31" 
            onChange={dateChangeHandler}/>
        </div>
      </div>
      <div className="new-expense__actions">
        <button onClick={showExpenseToggle}>Cancel</button>
        <button type="submit">Submit</button>
      </div>
    </form>
  )
}

export default ExpenseForm