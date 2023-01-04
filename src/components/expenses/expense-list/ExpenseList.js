import ExpenseItem from '../expense-item/ExpenseItem'
import './ExpenseList.css'

const ExpenseList = ({ filteredExpenses })=>{
  if(filteredExpenses.length === 0){
    return <h2 className='expenses-list__fallback'>No expenses found.</h2>
  }

  return(
    <ul className='expenses-list'>
      {filteredExpenses.map((expense, i)=>{
        return (
          <ExpenseItem
            key= {expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        )
      })
      }
    </ul>
  )
}

export default ExpenseList