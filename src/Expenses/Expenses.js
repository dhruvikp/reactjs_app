import { useState } from "react";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseItem from "./ExpenseItem";
import './Expenses.css'

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState("2020");

    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
    }

    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    })

    let expenseContent = <p>No Expenses found. </p>

    if (filteredExpenses.length > 0) {
        expenseContent = filteredExpenses.map((expense) => (
            <ExpenseItem
                key={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date} />))
    }

    return (
        <Card className="expenses">
            <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
            {expenseContent}

        </Card>
    );
}
export default Expenses;