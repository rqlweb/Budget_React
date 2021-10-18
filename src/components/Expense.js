import React from 'react';
import PropTypes from 'prop-types';

const Expense = ({expense}) => (  
    <li className="expense">
        <p>
            {expense.name_expense}

            <span className="expense"> {expense.amount} €</span>
        </p>
    </li>
);

Expense.propTypes = {
    expense: PropTypes.object.isRequired
}
 
export default Expense;