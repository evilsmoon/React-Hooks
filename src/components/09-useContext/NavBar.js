import React from 'react'
import {  NavLink } from "react-router-dom";
export const NavBar = () => {
    return (

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <NavLink className="navbar-brand" to="./">Use Context</NavLink>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <NavLink  exact activeClassName='active' className="nav-link nav-item" to="./">
                        Home
                    </NavLink>
                    <NavLink  exact activeClassName='active' className="nav-link nav-item" to="./about">
                        About
                    </NavLink>
                    <NavLink  exact activeClassName='active' className="nav-link nav-item" to="./login">
                        Login
                    </NavLink>

                </div>
            </div>
        </nav>
    )
}

