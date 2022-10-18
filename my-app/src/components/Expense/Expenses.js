import React, { useState } from 'react';
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from './ExpenseFilter';
import './Expenses.css';


function Expenses(props) {
    console.log(props.expenses);
    const [filteredYear, setFilteredYear] = useState('2022');

    function filterChangeHandler(selectedYear) {
      setFilteredYear(selectedYear);
    };
    return(
        <div className="expenses">
                  <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />

        {/* <ExpenseItem title={props.expenses[0].title} amount={props.expenses[0].amount} date={props.expenses[0].date}></ExpenseItem>
        <ExpenseItem title={props.expenses[1].title} amount={props.expenses[1].amount} date={props.expenses[1].date}></ExpenseItem> */}
        {props.expenses.map(e => {
        return <ExpenseItem key={e.id} title={e.title} amount={e.amount} date={e.date}></ExpenseItem>
        })}
      </div>
    );
};

export default Expenses;