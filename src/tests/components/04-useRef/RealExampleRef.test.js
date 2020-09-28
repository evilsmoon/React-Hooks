import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import React from 'react';
import { RealExampleRef } from '../../../components/04-useRef/RealExampleRef';

describe('test RealExampleRef.js', () => {
    
    test('debe de mostrar correctamente', () => {
        
        const wrapper = shallow(<RealExampleRef/>);
        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('MultipleCustomHooks').exists() ).toBe(false);
    });

    test('debe de mostrar <MultipleCustomHooks/>', () => {
        
        const wrapper = shallow(<RealExampleRef/>);
        wrapper.find( 'button' ).simulate('click')
        expect( wrapper.find('MultipleCustomHooks').exists() ).toBe(true);
        
    })
    
    
})
