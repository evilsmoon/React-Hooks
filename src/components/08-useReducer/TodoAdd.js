import React from 'react'
import { useForm } from '../../hooks/useForm'

export const TodoAdd = ({ handelAddTodo }) => {

    const [{ description }, handelInputChange, reset] = useForm({
        description: ""
    })

    const handelSubmit = (e) => {
        e.preventDefault();

        if (description.trim().length <= 1) {
            return;
        }

        const newToDo = {
            id: new Date().getTime(),
            desc: description,
            done: false

        }
        handelAddTodo(newToDo);
        reset();

    }
    return (

        <>
            <h4>add ToDo</h4>
            <hr />
            <form onSubmit={handelSubmit}>
                <input
                    type='text'
                    name='description'
                    placeholder='add..'
                    autoComplete='off'
                    className='form-control'
                    value={description}
                    onChange={handelInputChange}
                />
                <button
                    type='submit'
                    className='btn btn-primary mt-1 btn-block'
                >
                    Add
               </button>
            </form>
        </>
    )
}
