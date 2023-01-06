import { useState } from 'react'
import ExpenseFilter from '../expense-filter/ExpenseFilter'
import Card from '../../UI/card/Card'
import ExpenseList from '../expense-list/ExpenseList'
import ExpensesChart from '../expenses-chart/ExpensesChart'

const Expenses = ({ expenses })=>{
  const [yearFilter, setYearFilter] = useState('2022')

  const selectYearHandler = (selectedYear)=>{
    setYearFilter(selectedYear)
  }
  
  const filteredExpenses = expenses.filter((expense)=>{
    return expense.date.getFullYear() === Number(yearFilter)
  })

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter 
          selectYear={selectYearHandler} 
          currentYear={yearFilter}
        />
        <ExpensesChart filteredExpenses={filteredExpenses} />
        <ExpenseList 
          filteredExpenses={filteredExpenses}
        />
      </Card>
    </div>
  )
}

export default Expenses