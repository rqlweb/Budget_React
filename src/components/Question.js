import React, {Fragment, useState} from 'react';
import Error from './Error';
import PropTypes from 'prop-types';

const Question = ({ saveBudget, saveRemaining, updateQuestion }) => {

    //State for quantity and Error
    const [quantity, saveQuantity] = useState(0);
    const [ error , saveError] = useState(false);

    //Funtion define number in budget
    const defineBudget = amount => {
        saveQuantity( parseInt(amount.target.value, 10));
    }

    //Submit validate the budget
    const addBudget = amount => {
        amount.preventDefault();

        if(quantity < 1 || isNaN( quantity ) ) {
            saveError(true);
            return;
        }

        //correct validation
        saveError(false);
        saveBudget(quantity);
        saveRemaining(quantity);
        updateQuestion(false);

    }

    return ( 
        <Fragment>
            <h2>Presupuesto</h2>

            {error ? <Error  message="Presupuesto Incorrecto"/> : null}    

            <form
                onSubmit={addBudget}
            >
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Indica tu Presupuesto"
                    onChange={defineBudget}
                />

                <input
                    type="submit"
                    className="button-primary u-full-width"
                    value="Definir Presupuesto"
                />            
            </form>
        </Fragment>
     );
}

Question.propTypes = {
    saveBudget: PropTypes.func.isRequired,
    saveRemaining: PropTypes.func.isRequired,
    updateQuestion: PropTypes.func.isRequired
}
 
export default Question;