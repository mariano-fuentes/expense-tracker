import Expenses from './components/expenses/expenses/Expenses'
import NewExpense from './components/addExpense/new-expense/NewExpense';
import { useState } from 'react'

const App = ()=> {
  const DUMMY_EXPENSES = [
    {title: 'Car Insurance', amount: 311.99, date: new Date(2022, 11, 29), id:121245},
    {title: 'Car Fix', amount: 499.99, date: new Date(2022, 11, 29), id:34897867},
    {title: 'Car Parking', amount: 21.50, date: new Date(2022, 11, 29), id: 980121646}
  ]
  const [ expenses, setExpenses ] = useState(DUMMY_EXPENSES)

  const addExpenseHandler = (expense)=>{
    setExpenses((prevExpenses)=>{ return [expense, ...prevExpenses] })
  }
  return (
    <div>
      <NewExpense addExpense={addExpenseHandler}/>
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
