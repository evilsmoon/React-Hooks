import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import React from 'react';
import { TodoListItem } from '../../../components/08-useReducer/TodoListItem';
import { demoTodos } from './fixtures/demoTodos';


describe('test TodoListItem.js', () => {

    const handelToggle = jest.fn();
    const handelDelete = jest.fn();

    const wrapper = shallow(
        <TodoListItem
            todo={demoTodos[0]}
            index={0}
            handelToggle={handelToggle}
            handelDelete={handelDelete}
        />
    );

    test('debe de mostrar correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });
    test('debe de llamar la funcion handelToggle', () => {

        wrapper.find('p').simulate('click')
        expect(handelToggle).toHaveBeenCalledTimes(1)
        expect(handelToggle).toHaveBeenCalledWith(demoTodos[0].id)




    });
    test('debe de llamar la funcion handelDelete', () => {
        wrapper.find('button').simulate('click')
        expect(handelDelete).toHaveBeenCalledTimes(1)
        expect(handelDelete).toHaveBeenCalledWith(demoTodos[0].id)

    });
    test('debe de mostrar el text correctamente', () => {

        const p = wrapper.find('p');
        // console.log(p.text())
        expect(p.text().trim()).toBe(`1. ${demoTodos[0].desc}`)
    });

    test('debe de mostrar la clase del parrafo', () => {


        const todo = demoTodos[0];
        todo.done = true
        const wrapper = shallow(
            <TodoListItem
                todo={todo}
            />
        );
        expect(wrapper.find('p').hasClass('complete')).toBe(true);


    })


})
