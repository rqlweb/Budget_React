import React, { useState, useEffect } from 'react';
import Question from './components/Question';
import Form from './components/Form';
import List from './components/List';
import BudgetControl from './components/BudgetControl';

function App() {

  //define State
  const [ budget, saveBudget ] = useState(0);
  const [ remaining, saveRemaining ] = useState(0);
  const [ show_question, updateQuestion ] = useState(true);
  const [ expense_list, saveExpenseList ] = useState([]);
  const [ expense, insertExpense] = useState({ });
  const [ new_expense, expenseStatus] = useState(false);

  //useEffect update the remaining
  useEffect( () => {
    //add new expense
    if(new_expense){
      saveExpenseList([
        ...expense_list,
        expense
      ]);

       //subtract the remainder from the budget
      const remainingBudget = (remaining - expense.amount);
      saveRemaining(remainingBudget);

      //reset status
      expenseStatus(false);

    }
    
  }, [expense, new_expense, expense_list, remaining]);
 

  return (
      <div className="container">
        <header>
            <h1>Gasto Semanal</h1>
            
            <div className="main-content content">
              { show_question ?
                (
                  <Question
                    saveBudget={saveBudget}
                    saveRemaining={saveRemaining}
                    updateQuestion={updateQuestion}
                  />
                ) : (
                  <div className="row">
                    <div className="one-half column">
                        <Form 
                          insertExpense={insertExpense}
                          expenseStatus={expenseStatus}
                        />
                    </div>

                    <div className="one-half column">
                        <List
                            expense_list={expense_list}    
                        />

                        <BudgetControl 
                            budget={budget}
                            remaining={remaining}
                        />
                    </div>
                  </div>
                )
              }

            </div>
        </header>
      </div>
  );
}

export default App;
