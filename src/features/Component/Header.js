import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
    return (
        <div>
            <nav className="navbar navbar-expand-sm navbar-secondary bg-info">
                <div className="container-fluid">
                    <ul className="navbar-nav text-white">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/add_user">Add User</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>

    )
}

export default Header
