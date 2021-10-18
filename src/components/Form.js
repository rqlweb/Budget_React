import React, { useState } from 'react';
import Error from './Error';
import PropTypes from 'prop-types';


const Form = ({ insertExpense, expenseStatus }) => {

    const [ name_expense, saveNameExpense ] = useState('');
    const [ amount, saveAmount ] = useState(0);
    const [ error , saveError] = useState(false);

    //Funtion to add the expenses that the user enters
    const addExpense = quantity => {
        quantity.preventDefault();

        //Submit validate the Expense

        if(amount < 1 || isNaN(amount) || name_expense.trim() == '') {
            saveError(true);
            return;
        }

        saveError(false);
        const shortid = require('shortid');

        //we build an object to handle expenses
        const expense = {
            name_expense,
            amount,
            id:shortid.generate()
        }

        //expense list
        insertExpense(expense);
        //status when an expense is created
        expenseStatus(true);

        //reset the form by clicking on add expense
        saveNameExpense('');
        saveAmount(0);        

    }

    return ( 

        <form
            onSubmit={addExpense}
        >
            <h2>Agregar Gastos</h2>

            { error ? <Error message="Ambos campos son Obligatorios o el Monto es Incorrecto" /> : null}

            <div className="field">
                <label>Descripción del Gasto</label>
                <input
                    type="text"
                    className="u-full-width"
                    placeholder="Ej. Compra del Supermercado"
                    value={name_expense}
                    onChange={ e => saveNameExpense(e.target.value)}
                />
            </div>

            <div className="field">
                <label>Cantidad del Gasto</label>
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Ej. 300"
                    value={amount}
                    onChange={ e => saveAmount( parseInt(e.target.value, 10) )}
                />
            </div>

            <input
                type="submit"
                className="button-primary u-full-width"
                value="Agregar Gasto"
            />

        </form>

     );
}

Form.propTypes = {
    insertExpense: PropTypes.func.isRequired,
    expenseStatus: PropTypes.func.isRequired
}
 
export default Form;