import React, { useState } from 'react';
import ExpensesFilter from './ExpenseFilter';
import ExpenseList from './ExpenseList';
import ExpensesChart from './ExpenseChart';
import './Expenses.css';


function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState('2022');

    function filterChangeHandler(selectedYear) {
      setFilteredYear(selectedYear);
    };

    const filteredExpenses = props.expenses.filter(expense => {
      return expense.date.getFullYear().toString() === filteredYear;
    });

    return(
        <div className="expenses">
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
        <ExpensesChart expenses={filteredExpenses}/>
        <ExpenseList items = {filteredExpenses}/>
      </div>
    );
};

export default Expenses;