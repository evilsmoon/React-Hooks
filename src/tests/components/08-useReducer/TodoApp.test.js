import '@testing-library/jest-dom';
import { act } from '@testing-library/react';
import { mount, shallow } from 'enzyme';
import React from 'react';
import { TodoApp } from '../../../components/08-useReducer/TodoApp';
import { demoTodos } from './fixtures/demoTodos';
describe('test TodoApp', () => {
    

    const wrapper = shallow(<TodoApp/>)
    

    Storage.prototype.setItem = jest.fn(()=>{ });
    test('debe de mostrar correctamente <TodoApp/>', () => {
        
        expect(wrapper).toMatchSnapshot();

    });

    test('debe de mostrar un ToDo', () => {
        

        const wrapper = mount( <TodoApp/>)

        act(()=>{
            wrapper.find('TodoAdd').prop('handelAddTodo')( demoTodos[0]);
            wrapper.find('TodoAdd').prop('handelAddTodo')( demoTodos[1]);

        });

        expect(wrapper.find('h1').text().trim()).toBe('Todo 2')

        expect( localStorage.setItem).toHaveBeenCalledTimes(2); 
    });

    test('debe de eliminar un todo', () => {
        wrapper.find('TodoAdd').prop('handelAddTodo')(
             demoTodos[0]
        )

        wrapper.find('TodoList').prop('handelDelete')(
            demoTodos[0].id
        )
        expect(wrapper.find('h1').text().trim()).toBe('Todo 0')

  
    })
    
    
    

})
