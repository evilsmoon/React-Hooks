import React from 'react';
import { useCouter } from '../../hooks/useCouter';
import { useFetch } from '../../hooks/useFetch';
import './examples.css';
export const MultipleCustomHooks = () => {

    const {counter,increment}= useCouter(1);
    const { loading ,data} = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`)

    const {author,quote} = !!data && data[0]
    console.log(author,quote)
    
    
    return (
        <div>
            <h1>Breaking Bad || Custom Hooks!!! </h1>
            <hr />

            {
                loading
                    ?
                    (
                        <div className='alert alert-info text-center'>
                            loading...
                        </div>
                    )
                    :
                    (
                        <blockquote className='blockquote text-right'>
                            <p className='mb-0'>{quote}</p>
                            <footer className='blockquote-footer'>{author}</footer>
                        </blockquote>
                    )
            }
        <button className='btn btn-info' onClick={increment}>
                Next Quote

        </button>

        </div>
    )
}
