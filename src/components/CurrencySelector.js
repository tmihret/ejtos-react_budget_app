import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const CurrencySelector = () => {
    const { dispatch, currency } = useContext(AppContext);
    const [selectedCurrency, setSelectedCurrency] = useState(currency);

    const handleCurrencyChange = (event) => {
        const newCurrency = event.target.value;
        setSelectedCurrency(newCurrency);
        dispatch({
            type: 'CHG_CURRENCY',
            payload: newCurrency,
        });
    };

    return (
        <div>
            <select
                className='alert alert-secondary'
                style={{backgroundColor: 'lightgreen'}}
                value={selectedCurrency}
                onChange={handleCurrencyChange}
            >
                <option value="$">Currency ($ Dollar)</option>
                <option value="£">Currency (£ Pound)</option>
                <option value="€">Currency (€ Euro)</option>
                <option value="₹">Currency (₹ Rupee)</option>
            </select>
        </div>
    );
};

export default CurrencySelector;