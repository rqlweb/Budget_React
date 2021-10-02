import React from 'react';

const Expense = ({expense}) => (  
    <li className="expenses">
        <p>
            {expense.name_expense}

            <span className="expense"> {expense.amount} €</span>
        </p>
    </li>
);

 
export default Expense;