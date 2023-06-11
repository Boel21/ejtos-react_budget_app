import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
const Currency = () => {
    const { dispatch, currency } = useContext(AppContext);
   
    return (
        <div className='alert bg-success'>
            <span  style={{ color: 'white'}}>Currency: </span>
            <select className="custom-select bg-success" id="inputGroupSelect01" 
             style={{ color: 'white'}}
             onChange={(event) =>{
                dispatch({
                    type: 'CHG_CURRENCY',
                    payload: event.target.value,
                });
             }}>
                <option  defaultValue value="£" name="sales">£ Pound</option>
                <option value="$" name="marketing">$ Dollar</option>
                <option value="€" name="finance">€ Euro</option>
                <option value="₹" name="hr">₹ Ruppee</option>
            </select>
        </div>
    );
};
export default Currency;
    