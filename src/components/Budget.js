import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, remaining, expenses, currency} = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);

    const handleBudgetChange = (event) => {        
        // check if budget exceeds 20000
        if (event.target.value > 20000) {
            alert("The value cannot exceed remaining funds  £"+remaining);
            return;
        }

        // check if budget less than expenses
        if (event.target.value < totalExpenses) {
            // might be annoying if user tries to manually enter input
            alert("You cannot reduce the budget value lower than the spending");
            return
        }

        setNewBudget(event.target.value);
    }
    return (
        <div className='alert alert-secondary'>
            <label style={{whiteSpace: 'nowrap'}} for="budget">Budget: {currency}</label>
            <input id="budget" type="number" step="10" value={newBudget} onChange={handleBudgetChange} style={{width: "200px"}}></input>
        </div>
    );
};
export default Budget;
