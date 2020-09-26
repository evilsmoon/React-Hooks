import React, { useCallback, useState } from 'react';
import './memorize.css';
import { ShowIncrement } from './ShowIncrement';
export const CallbackHook = () => {
    

    const [counter, setCounter] = useState(10);

    

    const increment = useCallback(
        (num) => {
            setCounter( c=> c + num );
        
        },
        [setCounter]
    );
    return (
        <div>
           <h1> Callback Hook </h1> 
            <hr/>
            <h3>Counter : {counter}</h3>
            <ShowIncrement increment={increment}/>
        
        </div>
    )
}
