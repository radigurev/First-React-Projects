import React from "react";
import './NewExpense.css';
import ExpenseForm from "./ExpenseForm.js";

function NewExpense(props) {

    function SaveExpenseData(data) {
        const dummy = {
          ...data,
          id: Math.random().toString()
        };
        console.log(dummy);

        props.onAddExpense(dummy);
      };

    return (
        <div className="new-expense">
          <ExpenseForm onSaveExpense={SaveExpenseData} />
        </div>
    );
}

export default NewExpense;