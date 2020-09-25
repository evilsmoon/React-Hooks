import React, { useEffect, useState } from 'react'
import './effect.css'
import { Message } from './Message';
export const SimpleForm = () => {



    const [formState, setFormState] = useState({
        name: '',
        email: ''
    });

    const { name, email } = formState;
    useEffect(() => {
        // console.log('heyy!!')
    }, []);
    useEffect(() => {
        // console.log('formState!!')
    }, [formState]);
    useEffect(() => {
        // console.log('email!!')
    }, [email]);
    const handelInputChange = ({ target }) => {

        setFormState({
            ...formState,
            [target.name]: target.value
        })
    }

    return (
        <>
            <h1>Use Effect</h1>
            <hr />
            <div className='form-group'>

                <input
                    type='text'
                    name='name'
                    className='form-control'
                    placeholder='your name'
                    autoComplete='off'
                    value={name}
                    onChange={handelInputChange}
                />
            </div>
            <div className='form-group'>

                <input
                    type='text'
                    name='email'
                    className='form-control'
                    placeholder='email@email.com'
                    autoComplete='off'
                    value={email}
                    onChange={handelInputChange}
                />
            </div>

            {(name==='123') && <Message/>}
        </>
    )
}
