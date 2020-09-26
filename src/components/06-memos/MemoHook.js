import React, { useState } from 'react'
import { useCouter } from '../../hooks/useCouter'
import './memorize.css'
import { Small } from './Small';
export const Memorize = () => {


    const { counter, increment } = useCouter(10);
    const [show, setShow] = useState(true)
    return (
        <div>
            <h1>Memorize</h1>
            <hr />
            <h1>Counter : <Small value={counter}/></h1>
            <div
                className='form-group'
            >
                <button
                    className='btn btn-secondary'
                    onClick={increment}
                >
                    +1
                </button>

                <button
                    className='btn btn-danger'
                    onClick={()=>{
                        setShow(!show)
                    }}
                >
                    Show/Hide {JSON.stringify(show)}
                </button>
            </div>
        </div>
    )
}
