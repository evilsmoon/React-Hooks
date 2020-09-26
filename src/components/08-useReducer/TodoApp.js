import React, { useEffect, useReducer } from 'react'
import { todoReducer } from './todoReducer';
// import { useForm } from '../../hooks/useForm';
import { TodoList } from './TodoList';

import './styles.css'
import { TodoAdd } from './TodoAdd';

const init = ()=> {
    // return [{
    // id: new Date().getTime(),
    // desc: 'aprendiendo React',
    // done : false
    // }];
    return JSON.parse(localStorage.getItem('todos')) || [];
}
export const TodoApp = () => {
    
    
    const [todos,dispatch] = useReducer(todoReducer, [],init);
    
    

    useEffect(() => {
        localStorage.setItem('todos',JSON.stringify(todos));
    }, [todos]);


    const handelDelete = ( todoId ) =>{
        const action = {
            type: 'delete',
            payload:todoId 

            
        }
        dispatch(action);
   
    }

    const handelToggle = ( todoId ) =>{

        dispatch({
            type:'toggle',
            payload:todoId
        })
    }

    const handelAddTodo = ( newToDo) =>{
        dispatch({
            type: 'add',
            payload: newToDo
        } )
    }
    

    return (
        <div>
            <h1>Todo <small>{todos.length}</small></h1>
            <hr/>
        <div className='row'>
            <div className='col-7'>
            <>
            <TodoList 
                    todos={todos} 
                    handelDelete={handelDelete} 
                    handelToggle={handelToggle}/>
            </>

            </div>
            <div className='col-5'>
                <TodoAdd 
                    handelAddTodo={handelAddTodo}/>
            </div>
        </div>
       
        </div>
    )
}
