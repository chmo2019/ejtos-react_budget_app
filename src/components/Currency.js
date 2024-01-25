import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    const { currency } = useContext(AppContext);
    
    const [name, setName] = useState('');

    return (
        <div>
        <label for="currencySelection">Currency</label>                     
        <select className="custom-select" id="currencySelection" onChange={(event) => setName(event.target.value)}>
                <option value="$" name="dollar">$ Dollar</option>
                <option value="£" name="pound">£ Pound</option>
                <option value="€" name="Euro">€ Euro</option>
                <option value="₹" name="Rupee">₹ Rupee</option>
        </select>
        </div>
    );
};
export default Currency;