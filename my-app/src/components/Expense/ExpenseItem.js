import React, { useState } from 'react';

import ExpoenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

function ExpenseItem(props) {

   const [title, setTitle] =  useState(props.title);

   function ChangeTitleHandler() {
        setTitle('Updated');
    }
    return (
        <Card>
            <div className='expense-item '>
                <ExpoenseDate date={props.date}></ExpoenseDate>
                <div className='expense-item__description'>
                    <h2>{title}</h2>
                    <div className='expense-item__price'>${props.amount}</div>
                </div>
            </div>
            <button onClick={ChangeTitleHandler}>change</button>
        </Card>
    );
}

export default ExpenseItem; 