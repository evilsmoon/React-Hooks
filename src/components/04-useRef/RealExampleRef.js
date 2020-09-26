import React, { useState } from 'react';
import { MultipleCustomHooks } from '../03-examples/MultipleCustomHooks';
import './ref.css'
export const RealExampleRef = () => {
    
    const [show, setShow] = useState(false);
    return (
        <div>
            <h1>RealExampleRef</h1>
            <hr/>
            {
             show && <MultipleCustomHooks/>

            }

            <div className='form-group'>
                <button
                    className='btn btn-info'
                    onClick={()=>{
                        setShow(!show)
                    }}
                >
                    Show/Hide
                </button>
            </div>
        </div>
    )
}
