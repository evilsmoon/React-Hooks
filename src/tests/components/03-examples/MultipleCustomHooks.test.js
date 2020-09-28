import '@testing-library/jest-dom';
import React from 'react';
import { shallow } from 'enzyme';
import { MultipleCustomHooks } from '../../../components/03-examples/MultipleCustomHooks';
import { useFetch } from '../../../hooks/useFetch';
import { useCouter } from '../../../hooks/useCouter';

jest.mock('../../../hooks/useFetch');
jest.mock('../../../hooks/useCouter');

describe('test MultipleCustomHooks.js', () => {


    useCouter.mockReturnValue({
        counter:10,
        increment: ()=>{}
    })
    test('debe de mostrat correctamente', () => {

        useFetch.mockReturnValue({
            data: null,
            loading: true,
            error: null
        });
        const wrapper = shallow(<MultipleCustomHooks />);

        expect(wrapper).toMatchSnapshot();
    });

    test('debe de mostrar informacion', () => {

        useFetch.mockReturnValue({

            data: [{ 
                author: 'gabriel', 
                quote: 'hii ;v' 
            }],
            loading: false,
            error: null
        });
        const wrapper = shallow(<MultipleCustomHooks />);
        // expect(wrapper).toMatchSnapshot();
        expect( wrapper.find('.alert').exists() ).toBe( false );
        expect( wrapper.find('.mb-0').text().trim() ).toBe( 'hii ;v' );
        expect( wrapper.find('footer').text().trim() ).toBe( 'gabriel' );
    });

})
