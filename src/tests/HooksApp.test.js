import '@testing-library/jest-dom'
import React from 'react';
import { shallow } from 'enzyme'
import { HooksApp } from '../HooksApp'

describe('Test HooksApp.js', () => {

    test('mostrar <HooksApp/>', () => {

        const wrapper = shallow(<HooksApp/>);
 
        expect(wrapper).toMatchSnapshot();
        
    })
    
    
})
