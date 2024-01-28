import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import bootstrap from 'bootstrap';

const Currency = () => {
    const { dispatch, currency } = useContext(AppContext);
    const [name, setName] = useState("$ Dollar");
    
    const submitEvent = (name) => {
        setName(name);
        dispatch({
            type: "CHG_CURRENCY",
            payload: name.split(" ")[0]
        });
    }

    return (
        <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                Currency ({name})
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1" onClick={(event) => submitEvent(event.target.value)}>
                    <li><option  className="dropdown-item" value="$ Dollar" name="dollar">$ Dollar</option></li>
                    <li><option  className="dropdown-item" value="£ Pound" name="pound">£ Pound</option></li>
                    <li><option  className="dropdown-item" value="€ Euro" name="Euro">€ Euro</option></li>
            </ul>
        </div>
    );
};
export default Currency;