import ExpenseForm from "./ExpenseForm";
import './NewExpense.css';

const NewExpense = (props) => {

  const onSaveExpenseDataHandler = (expenseData) => {
    const expData = {
      ...expenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(expData);
  };

  return (
    <div className='new-expense'>
      <ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler} />
    </div>
  );
}

export default NewExpense;