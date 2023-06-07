import React, { useState } from "react";
import "../NewExpense/ExpenseForm.css";

const ExpenseForm = () => {
  const [enterdTitle, setEnteredTitle] = useState("");
  const [enterdAmount, setEnteredAmount] = useState("");
  const [enterdDate, setEnteredDate] = useState("");
  // const [userInput,setuserInput]=useState({
  //   enterdTitle:'',
  //   enterdAmount:'',
  //   enterdDate:'',
  // })
  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enterdTitle,
      amount: enterdAmount,
      date: new Date(enterdDate),
    };
    setEnteredTitle('')
    setEnteredAmount('')
    setEnteredDate('')
    console.log(expenseData);
  };
  const titleChangeHandler = (event) => {
    // setuserInput({
    //   ...userInput,
    //   enterdTitle:event.target.value,
    // });
    //to use approach (always)

    // setuserInput((prevState)=>{
    //   return {...prevState, enterdTitle:event.target.value}
    // })
    setEnteredTitle(event.target.value);
  };
  const amountChangeHandler = (event) => {
    // setuserInput({
    //   ...userInput,
    //   enterdAmount:event.target.value,
    // });
    console.log("hey");

    setEnteredAmount(event.target.value);
  };
  const dateChangeHandler = (event) => {
    // setuserInput({
    //   ...userInput,
    //   enterdDate:event.target.value,
    // });
    setEnteredDate(event.target.value);
  };

  return (
    <>
      <div>
        <form onSubmit={submitHandler}>
          <div className="new-expense__controls">
            <div className="new-expense__control">
              <label>Title</label>
              <input type="text" value={enterdTitle} onChange={titleChangeHandler} />
            </div>
            <div className="new-expense__control">
              <label>Amount</label>
              <input
                type="number"
                min="0.01"
                step="0.01"
                onChange={amountChangeHandler}
                value={enterdAmount}
              />
            </div>
            <div className="new-expense__control">
              <label>Date</label>
              <input
                type="date"
                min="1996-09-09"
                max="2023-09-09"
                onChange={dateChangeHandler}
                value={enterdDate}
              />
            </div>
          </div>
          <div className="new-expense__actions">
            <button type="submit">Add Expense</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ExpenseForm;
