<<<<<<< HEAD
import React, { useContext,useState } from 'react';
import{ AppContext } from '../context/AppContext';
=======
import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
>>>>>>> 71fb8e9dee756bd8dfe4a40f89bc9ff2fe1dd1c7

const Budget = () => {
    const { budget } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const handleBudgetChange = (event) => {
        setNewBudget(event.target.value);
    }
    return (
<div className='alert alert-secondary'>
<span>Budget: £{budget}</span>
<input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
</div>
    );
};
<<<<<<< HEAD
export default Budget;
=======
export default Budget;
>>>>>>> 71fb8e9dee756bd8dfe4a40f89bc9ff2fe1dd1c7
