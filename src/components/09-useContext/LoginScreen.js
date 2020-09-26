import React, { useContext } from 'react'
import { UserContext } from './UserContext'

export const LoginScreen = () => {
    
    const { setUser} = useContext(UserContext)
    
    // console.log(user ,setUser)
    
    const user = {
        id: 123,
        name:'Gabriel'
    }
    return (
        <div>
            <h1>LoginScreen</h1>
            <hr />
            <button
                className='btn btn-info'
                onClick={()=>{
                    setUser(user)
                }}
            >
                Login
           
            </button>
        </div>

    )
}
