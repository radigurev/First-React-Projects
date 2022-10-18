import React, { useState } from "react";
import './ExpenseForm.css';

function ExpenseForm(props) {
    const [userInput, setUserInput] = useState({
        title: '',
        amount: '',
        date: ''
    });

    function TitleChangeHandler(event) {
        setUserInput(
            {
                ...userInput,
                title: event.target.value
            }
        )
    }
    function AmountChangeHandler(event) {
        setUserInput(
            {
                ...userInput,
                amount: event.target.value
            }
        )
    }
    function DateChangeHandler(event) {
        setUserInput(
            {
                ...userInput,
                date: new Date(event.target.value)
            }
        )
    }

    function sumbitHandler(event) {
        event.preventDefault();
        
        setUserInput ({
            title: '',
            amount: '',
            date: ''
        });

        props.onSaveExpense(userInput);
        
        

        event.target.reset();
    };

    return <form onSubmit={sumbitHandler}>
        <div className='new-expense__controls'>
            <div className='new-expense__control'>
                <label>Title</label>
                <input type='text' onChange={TitleChangeHandler} />
            </div>
            <div className='new-expense__control'>
                <label>Amount</label>
                <input type='number'  min='0.01' step='0.01' onChange={AmountChangeHandler} />
            </div>
            <div className='new-expense__control'>
                <label>Date</label>
                <input type='date' min='2019-01-01' max='2022-12-31' onChange={DateChangeHandler} />
            </div>
        </div>
        <div className='new-expense__actions'>
            <button type='submit'>Add Expense</button>
        </div>
    </form>
}

export default ExpenseForm;