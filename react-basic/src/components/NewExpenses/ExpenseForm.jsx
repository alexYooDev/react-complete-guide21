import { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {

  const [enteredTitle, setTitle] = useState('');
  const [enteredAmount, setAmount] = useState('');
  const [enteredDate, setDate] = useState('');

  // const [userInput, setUserInput ] = useState({
  //   title : '',
  //   amount : '',
  //   date: ''
  // })

  const titleChangeHandler = (e) => {
    setTitle(e.target.value);
    // setUserInput({
    //   ...userInput,
    //   title: e.target.value
    // })
    // setUserInput((prevState)=>{
    //   return {...prevState, title: e.title.value};
    // });
  };

  const amountChangeHandler = (e) => {
    setAmount(e.target.value);
    // setUserInput({
    //   ...userInput,
    //   amount: e.target.value
    // })
    // setUserInput((prevState)=>{
    //   return {...prevState, amount: e.title.value};
    // });
  };

  const dateChangeHandler = (e) => {
    setDate(e.target.value);
    // setUserInput({
    //   ...userInput,
    //   date: e.target.value
    // })
    // setUserInput((prevState)=>{
    //   return {...prevState, date: e.title.value};
    // });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate)
    };
    
    props.onSaveExpenseData(expenseData);
    setTitle('');
    setAmount('');
    setDate('');
  }

  return (
    <form onSubmit={submitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input 
            type="text" 
            value={enteredTitle} 
            onChange={titleChangeHandler} 
          />
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input 
            type="number" 
            min='0.01' 
            step='0.01' 
            value={enteredAmount} 
            onChange={amountChangeHandler} 
          />
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input 
            type="date" 
            min='2019-01-01' 
            max='2022-12-31' 
            value={enteredDate} 
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className='new-expenses__actions'>
        <button type='submit'>Add Expenses</button>
      </div>
    </form>
  );
}

export default ExpenseForm;