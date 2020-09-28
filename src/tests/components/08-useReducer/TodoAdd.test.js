import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import React from 'react';
import { TodoAdd } from '../../../components/08-useReducer/TodoAdd';
describe('test TodoAdd', () => {

    const handelAddTodo = jest.fn()

    const wrapper = shallow(<TodoAdd

        handelAddTodo={handelAddTodo}

    />)

    test('debe de mostrar correctamente <TodoAdd/>', () => {



        expect(wrapper).toMatchSnapshot();

    });

    test('no debe de llamar handeltodoadd', () => {

        const FormSubmit = wrapper.find('form').prop('onSubmit');

        // console.log(FormSubmit);
        FormSubmit({ preventDefault() { } });
        expect(handelAddTodo).toBeCalledTimes(0)

    });
    test('debe de llamar handelAddTodo', () => {

        const value = "aprender react"

        wrapper.find('input').simulate('change', {
            target: {
                value,
                name: 'description'
            }

        })
        const FormSubmit = wrapper.find('form').prop('onSubmit');

        FormSubmit({ preventDefault() { } });
        expect( handelAddTodo ).toHaveBeenCalledTimes( 1 )
        expect( handelAddTodo ).toHaveBeenCalledWith( expect.any(Object) );
        expect( handelAddTodo ).toHaveBeenCalledWith( {
            id :expect.any(Number),
            desc:value,
            done:false,

        } );
        expect( wrapper.find('input').prop('value') ).toBe('')


    })




})              
