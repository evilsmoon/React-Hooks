import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import React from 'react';
import { TodoList } from '../../../components/08-useReducer/TodoList';
import { demoTodos } from './fixtures/demoTodos';
describe('test <TodoList/>', () => {
    
    test('debe de mostrar correctamente <TodoList/>', () => {
        
        const todos = demoTodos 
        const handelDelete = jest.fn()
        const handelToggle = jest.fn()
        const wrapper = shallow( <TodoList
            todos={todos}
            handelDelete={handelDelete}
            handelToggle={handelToggle}
        /> )

        expect( wrapper ).toMatchSnapshot();
        
    })
    test('debe de tener el numero de elementos de mi todos', () => {
        
        const todos = demoTodos 
        const handelDelete = jest.fn()
        const handelToggle = jest.fn()
        const wrapper = shallow( <TodoList
            todos={todos}
            handelDelete={handelDelete}
            handelToggle={handelToggle}
        /> )

        expect( wrapper.find('TodoListItem').length ).toBe(todos.length);
        

        expect(wrapper.find('TodoListItem').at(0).prop('handelDelete')).toEqual(expect.any(Function))
    })
    

})
