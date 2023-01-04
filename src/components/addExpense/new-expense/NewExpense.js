import './NewExpense.css'
import { useState } from 'react'
import ExpenseForm from '../expense-form/ExpenseForm'

const NewExpense = ({ addExpense })=> {
  const [showAddExpense, setShowAddExpense] = useState(false)

  const showExpenseToggle = ()=>{
    setShowAddExpense(!showAddExpense)
  }

  return (
    <div className="new-expense">
      {showAddExpense ? 
        <ExpenseForm 
          addExpense={addExpense}
          showExpenseToggle={showExpenseToggle}
        />
        : <button onClick={showExpenseToggle}>Add New Expense</button>
      }
    </div>
  )
}

export default NewExpense