import React, { useState } from "react";
import Expenses from "./components/Expense/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
function App(props) {

  const [expenses, setExpenses] = useState([{
    id: '1',
    title: "Car Insurance",
    amount: 345.23,
    date: new Date(2022, 2, 28),
  },
    {
      id: '2',
      title: "Toilet Paper",
      amount: 315.23,
      date: new Date(2022, 3, 28),
    }]);

  function AddNewExpense(expense) {
    setExpenses([
      ...expenses,
      {
        id: expense.id,
        title: expense.title,
        amount: expense.amount,
        date: expense.date,
      }
    ])
    console.log(expenses);
  }
  return (
    <div>
      <NewExpense onAddExpense={AddNewExpense} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
