import React, { useContext,useState } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { budget,currency,dispatch,expenses } = useContext(AppContext);
    const [cost, setCost] = useState(budget);
    const submitEvent = () => {
        if (cost > 20000) {
            alert("The value cannot exceed 20000");
            setCost("");
            return;
        }
        else if (cost < expenses.reduce((total, item) => { return (total += item.cost);}, 0)) {
            alert("The value cannot be less than the spent amount");
            setCost("");
            return;
        }
        dispatch({
            type: 'SET_BUDGET',
            payload: cost,
        });
    };
    return (
        <div className='alert alert-secondary'>
            <label htmlFor="budget-input">Budget: {currency}</label>
            <input 
                type='number'
                className='budget-input'
                value={cost}
                onChange={(event) => setCost(event.target.value)}
                style={{width: "100px"}}
                />
                <button className="btn btn-primary" onClick={submitEvent} >
                        Save
                    </button>
        </div>
    );
};
export default Budget;
