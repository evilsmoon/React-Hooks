import React from 'react'
import './styles.css'

export const TodoListItem = ({ todo, index, handelToggle ,handelDelete}) => {
    // console.log(todo, i)
    return (
        <li
            key={todo.id}
            className='list-group-item'
        >
            <p
                className={`${todo.done && 'complete'} `}
                onClick={() => {
                    handelToggle(todo.id)

                }}
            >
                {index + 1}. {todo.desc}
            </p>
            <button
                className='btn btn-danger'
                onClick={() => {
                    handelDelete(todo.id)
                }}
            >
                delete
            </button>
        </li>
    )
}
