import React, {Fragment} from 'react';
import { checkBudget } from '../helpers'

const BudgetControl = ({ budget, remaining }) => {
    return ( 
        <Fragment>
            <div className="alert alert-primary">
                Presupuesto: {budget} €
            </div>
            <div className={checkBudget( budget, remaining)}>
                Saldo Restante: {remaining} €
            </div>
        </Fragment>
     );
}
 
export default BudgetControl;