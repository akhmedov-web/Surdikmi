import React from 'react'
import { NavLink } from "react-router-dom"

export default function Navbar() {
    return (
        <div className='navbar p-xl-4 p-2'>
            <div className="col-4">
                <img src="https://icon-library.com/images/plane-icon-png/plane-icon-png-9.jpg" alt="img" className='w-25 h-25' />
            </div>
            <div className="col-8 d-flex justify-content-around align-items-center h-100">
                <li className="nav-item list-unstyled">
                    <NavLink to="/" className={({ isActive }) => isActive ? "fw-bold nav-link" : "nav-link text-xl-dark text-dark text-xl-light"}>
                        Home
                    </NavLink>
                </li>
                <li className="nav-item list-unstyled">
                    <NavLink to="/contact" className={({ isActive }) => isActive ? "fw-bold nav-link" : "nav-link text-dark text-xl-light"}>
                        Contact Us
                    </NavLink>
                </li>
                <li className="nav-item list-unstyled">
                    <NavLink to="/about" className={({ isActive }) => isActive ? "fw-bold nav-link" : "nav-link text-dark text-xl-light"}>
                        About Me
                    </NavLink>
                </li>
            </div>
        </div>
    )
}
