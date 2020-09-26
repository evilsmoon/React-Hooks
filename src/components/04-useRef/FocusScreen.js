import React, { useRef } from 'react';
import './ref.css'
export const FocusScreen = () => {
    

    const inputRef = useRef();

    const handelClick = ()=>{
        inputRef.current.select();
    }
    return (
        <div>
            <h1>Focus Screen</h1>
            <hr />
            <div className='form-group'>
                
            <input
                ref={inputRef}
                className='form-control'
                placeholder='you name' 
            />
            </div>
            <div className='form-group'>
                <button 
                    className='btn btn-danger'
                    onClick={handelClick}
                >
                    Focus
                </button>
            </div>
        </div>
    )
}
