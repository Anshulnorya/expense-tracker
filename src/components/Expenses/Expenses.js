import React from 'react';
import { ExpenseItem } from "./ExpenseItem";
import Card from '../UI/Card';
const expensesData = [
    {
      id: "e1",
      title: "Car Insurance",
      amount: "540.54",
      date: new Date(2023, 19, 19),
    },
    {
      id: "e2",
      title: "Bike Insurance",
      amount: "500.54",
      date: new Date(2023, 29, 29),
    },
    {
      id: "e3",
      title: "Life Insurance",
      amount: "700.54",
      date: new Date(2023, 39, 29),
    },
  ];
const Expenses = () => {
  return (
    <>  
     <Card className='expenses'>
     {
          expensesData.map((expense)=>{
            return <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
            key={expense.id}
          />
          })
      }
     </Card>
    
    </>
  )
}

export default Expenses;