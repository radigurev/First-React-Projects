import React from "react";
import ExpenseItem from "./ExpenseItem";
import './ExpenseList.css';

function ExpenseList(props) {
    return (
        <div>
        {props.items.length <= 0 ? <p className="expenses-list__fallback">No data found!</p> : props.items.map(e => {
        return <ExpenseItem key={e.id} title={e.title} amount={e.amount} date={e.date}></ExpenseItem>
        })}
      </div>
    );
}

export default ExpenseList;