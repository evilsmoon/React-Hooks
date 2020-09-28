import '@testing-library/jest-dom';
import { todoReducer } from '../../../components/08-useReducer/todoReducer';
import { demoTodos } from './fixtures/demoTodos';


describe('test todoReducer.js', () => {


    test('debe de retornar el estado por defecto', () => {

        const state = todoReducer(demoTodos, {});

        expect(state).toEqual(demoTodos);

    });
    test('debe de agregar un todo', () => {

        const newTodo = {
            id: 3,
            desc: 'dota2',
            done: false

        }
        const action = {
            type: 'add',
            payload: newTodo
        }
        const state = todoReducer(demoTodos,action);

        expect(state.length).toBe(3);
        expect(state).toEqual([...demoTodos , newTodo]);

    });
    test('debe de borrar ToDo', () => {
        const deleteToDoId = {
            id:2
        }
        const action ={
            type:'delete',
            payload : deleteToDoId.id
        }
        const state = todoReducer(demoTodos,action);

        expect(state.length).toBe(1);


    })
    test('debe de cambiar el valor del ToDo', () => {
       
        const toggleToDoId = {
            id:2
        }
        const action ={
            type:'toggle',
            payload : toggleToDoId.id
        }
        const state = todoReducer(demoTodos,action);

        expect(state).not.toEqual(demoTodos)
        // expect(state.length).toBe(1);


    })
       



})

