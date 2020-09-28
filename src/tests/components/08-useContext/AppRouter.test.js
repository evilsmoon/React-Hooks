import '@testing-library/jest-dom';
import { mount } from 'enzyme';
import React from 'react';
import { AppRouter } from '../../../components/09-useContext/AppRouter';
import { UserContext } from '../../../components/09-useContext/UserContext';
describe('test <AppRouter/>', () => {
    

    const user = {
        id: 123,
        name:'Gabriel'
    }

    const wrapper = mount(<UserContext.Provider
        value={user}
    >
        <AppRouter/>
    </UserContext.Provider>)
    test('debe de mostrar correctamente ', () => {
        
    
        expect(wrapper).toMatchSnapshot();
    })
    

})
