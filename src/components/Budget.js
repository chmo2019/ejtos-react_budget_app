import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, remaining} = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    
    const handleBudgetChange = (event) => {
        // check if budget exceeds 20000
        if (event.target.value > 20000) {
            alert("The value cannot exceed remaining funds  £"+remaining);
            return;
        }

        // TODO: check if budget less than expenses

        setNewBudget(event.target.value);
    }
    return (
<div className='alert alert-secondary'>
<span>Budget: £{budget}</span>
<input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
</div>
    );
};
export default Budget;
