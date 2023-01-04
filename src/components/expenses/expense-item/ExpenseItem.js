import './ExpenseItem.css'
import ExpenseDate from '../expense-date/ExpenseDate'
import Card from '../../UI/card/Card'

const ExpenseItem = ({ title, amount, date })=> {

  return(
    <li>
      <Card className="expense-item">
        <ExpenseDate date={date} />
        <div className="expense-item__description">
          <h2>{title}</h2>
          <div className="expense-item__price">{amount}</div>
        </div>
      </Card>
    </li>
  )
}

export default ExpenseItem;