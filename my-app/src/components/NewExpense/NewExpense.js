import React, {useState} from "react";
import './NewExpense.css';
import ExpenseForm from "./ExpenseForm.js";

function NewExpense(props) {

  const [IsButtonClicked,setIsButtonClicked] = useState(false);

  function buttonIsClicked(state) {
    setIsButtonClicked(state);
  }

    function SaveExpenseData(data) {
        const dummy = {
          ...data,
          id: Math.random().toString()
        };
        props.onAddExpense(dummy);

        buttonIsClicked(false);
      };

    return (

        // <div className="new-expense">
        //   {!IsButtonClicked && <button onClick={buttonIsClicked(true)}>Add New Expense</button>
        //   }
        //   {IsButtonClicked && <ExpenseForm onSaveExpense={SaveExpenseData}  />}
        //   </div>

<div className='new-expense'>
{!IsButtonClicked && (
  <button onClick={() => buttonIsClicked(true)}>Add New Expense</button>
)}
{IsButtonClicked && (
  <ExpenseForm
  onSaveExpense={SaveExpenseData}
    onCancel={() => buttonIsClicked(false)}
  />
)}
</div>
    );
}

export default NewExpense;