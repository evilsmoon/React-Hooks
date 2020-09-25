import React, {useState } from 'react'
import './effect.css'
export const FormWithCustomHook = () => {



    const [formState, setFormState] = useState({
        name: '',
        email: ''
    });

    const { name, email } = formState;
    const handelInputChange = ({ target }) => {

        setFormState({
            ...formState,
            [target.name]: target.value
        })
    }

    return (
        <>
            <h1>Form With Custom Hook</h1>
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

        </>
    )
}
