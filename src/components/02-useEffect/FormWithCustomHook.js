import React, { useEffect } from 'react'
import { useForm } from '../../hooks/useForm';
import './effect.css'
export const FormWithCustomHook = () => {



    const [formValeus, handelInputChange] = useForm({
        name: '',
        email: '',
        password: ''
    });

    const { name, email, password } = formValeus;
    useEffect(() => {
        console.log('email change')
    }, [email])

    const handelSubmit = (e) => {
        e.preventDefault();

        console.log(formValeus)
    }
    return (
        <form onSubmit={handelSubmit}>
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
            <div className='form-group'>

                <input
                    type='password'
                    name='password'
                    className='form-control'
                    placeholder='************'
                    value={password}
                    onChange={handelInputChange}
                />
            </div>
            <div className='form-group'>
                <button type='submit'
                    className='btn btn-danger'>
                    Save
                </button>
            </div>
        </form>
    )
}
