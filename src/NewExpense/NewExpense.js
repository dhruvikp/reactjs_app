import ExpenseForm from "./ExpenseForm";
import './NewExpense.css';

const NewExpense = (props) => {

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        console.log('new exp');
        console.log(expenseData);
       props.onExpenseAdded(expenseData);
    }

    return(

        <div className="new-expense">
            <ExpenseForm onSaveExpenseData = {saveExpenseDataHandler} />
        </div>

    );
}

export default NewExpense;