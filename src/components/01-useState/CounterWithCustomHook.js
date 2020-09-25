import React from 'react'
import { useCouter } from '../../hooks/useCouter'
import './counter.css'
export const CounterWithCustomHook = () => {
    
    
    const {state,increment,reset,decrement} =useCouter();        
    return (
        <>
         <h1>Counter with hook: {state}</h1>
         <hr/>

         <button className='btn btn-primary'
                 onClick={()=>increment(2)}> + 1</button>   
         <button className='btn btn-danger'
                 onClick={reset}> reset</button>   
         <button className='btn btn-secondary'
                 onClick={()=>decrement(2)}> - 1</button>   
        </>
    )
}
