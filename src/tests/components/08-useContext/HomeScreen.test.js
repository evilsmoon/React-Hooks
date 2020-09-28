import '@testing-library/jest-dom';
import { mount } from 'enzyme';
import React from 'react';
import { HomeScreen } from '../../../components/09-useContext/HomeScreen';
import { UserContext } from '../../../components/09-useContext/UserContext';



describe('test HomeScreen.js', () => {


    const user = {
        name: 'Gabriel',
        email: 'gmorale@gmail.com'

    }
    const wrapper = mount(
        <UserContext.Provider value={{
            user
        }}>
            <HomeScreen />
        </UserContext.Provider>
    )

    test('debe de mostrar correctamente <HomeScreen.js/>', () => {

        expect(wrapper).toMatchSnapshot();
    })

})

