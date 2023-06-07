import React, { useState } from "react";
import "../Expenses/ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "../UI/Card.css";
export const ExpenseItem = ({ title, amount, date }) => {
  const [currentTitle, setTitle] = useState(title);

  const handleClick = () => {
    setTitle("1");
    console.log(currentTitle);
  };
  return (
    <>
      <Card className="expense-item">
        <ExpenseDate date={date} />

        <div className="expense-item__description">
          <h2>{currentTitle}</h2>
          <div className="expense-item__price">&#x20B9; {amount}</div>
        </div>
        <button onClick={handleClick}>Change Title</button>
      </Card>
    </>
  );
};
