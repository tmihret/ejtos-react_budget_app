import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

export const CurrencySelector = ({ onCurrencyChange }) => {
    const { dispatch, currency } = useContext(AppContext);
    const [selectedCurrency, setSelectedCurrency] = useState('£ Pound');

    const handleCurrencyChange = (event) => {
        const newCurrency = event.target.value;
        setSelectedCurrency(event.target.value);
        onCurrencyChange(event.target.value);
        dispatch({
            type: 'CHG_CURRENCY',
            payload: newCurrency,
        });
    };

    return (
         <select
            className='alert alert-secondary'
            style={{ backgroundColor: 'lightgreen' }}
            value={selectedCurrency}
            onChange={handleCurrencyChange}
        >
            <option value={selectedCurrency}>Currency ({selectedCurrency})</option>
            <option value="$ Dollar" name="dollar">$ Dollar</option>
            <option value="£ Pound" name="pound">£ Pound</option>
            <option value="€ Euro" name="euro">€ Euro</option>
            <option value="₹ Rupee" name="rupee">₹ Rupee</option>
        </select>
    );
};