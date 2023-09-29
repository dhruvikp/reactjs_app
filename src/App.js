import logo from './logo.svg';
import './App.css';
import ExpenseItem from './Expenses/ExpenseItem';
import Expenses from './Expenses/Expenses';
import NewExpense from './NewExpense/NewExpense';
import { useState } from 'react';


const DUMP_EXPENSES = [
  { id: 'e1', title: 'Toilet Paper', amount: 94.12, date: new Date(2020, 7, 14) },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  { id: 'e3', title: 'Car Insurance', amount: 294.67, date: new Date(2023, 2, 28) },
  { id: 'e4', title: 'New Desk (Wooden)', amount: 450, date: new Date(2021, 5, 12) },
];

const App = () => {

  const[expenses, setExpenses] = useState(DUMP_EXPENSES);

  const addExpenseHandler = enteredExpense => {
    setExpenses((prevStat) => {
      return [enteredExpense, ...prevStat];
    });
  }

  return (
    <div>
      <h1>Hello Simplilearn!!</h1>
      <NewExpense onExpenseAdded = {addExpenseHandler}/>
      <Expenses  items={expenses}/>
    </div>
  );
}
export default App;
