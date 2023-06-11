import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { currency, remaining, expenses } = useContext(AppContext);
  
    const [cost, setCost] = useState('');

    const totalExpenses = expenses.reduce((total, item) => {
        return (total = total + item.cost);
    },0)

    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}</span>
            <input
                required='required'
                type='number'
                id='cost'
                value={cost}
                style={{ marginLeft: '1px' , size: 10}}
                onChange={(event) => setCost(event.target.value)}
                onKeyPress={(event) => {
                    if(event.key === 'Enter'){
                        if(event.target.value > remaining) {
                            alert("The value cannot exceed remaining funds");
                            setCost("");
                            return;
                        }else if( event.target.value < totalExpenses){
                            alert("You cannot reduce the budget value lower than the spending");
                            setCost("");
                            return;
                        }
                    }
                    setCost(event.target.value);
                }}
            >
            </input>
        </div>
    );
};
export default Budget;