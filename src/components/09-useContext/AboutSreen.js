import React, { useCallback, useContext } from 'react'
import { UserContext } from './UserContext'

// import './styles.css'

export const AboutSreen = () => {
    
    const {user , setUser} = useContext(UserContext);
    
    const handelLogout = ()=>{

        setUser({})
    }
    return (
        <div>
            <h1>AboutSreen</h1>
            <hr />
            <pre>
                {
                    JSON.stringify(user,null,3)
                }
            </pre>

            <button
                className='btn btn-secondary'
                onClick={handelLogout}
           >
                Logout
            </button>

        </div>
    )
}
