import React from 'react';
import Expense from './Expense';

const List = ({expense_list}) =>  ( 
    <div className="expenses-incurred">
        <h2>Listado</h2>
        { expense_list.map(expense => (
            <Expense
                key= {expense.id}
                expense={expense}
            />    
        ))}
    </div>
 );

 
export default List;