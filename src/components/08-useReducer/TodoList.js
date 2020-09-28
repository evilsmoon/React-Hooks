import React from 'react';
import { TodoListItem } from './TodoListItem';
export const TodoList = ({ todos ,handelDelete,handelToggle}) => {

    console.log(todos)
    return (
        <ul className='list-group list-group-flush'>
            {
                todos.map((todo, i) => (
                    
                    <TodoListItem 
                    key={ todo.id }
                    todo={ todo } 
                    index={ i } 
                    handelToggle={handelToggle} 
                    handelDelete={handelDelete}/>
                    
                ))
            }

        </ul>
    )
}

// TodoList.propTypes = {

// }

