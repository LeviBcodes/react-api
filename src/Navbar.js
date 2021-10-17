import React from 'react'
import './App.css';

const Navbar = () => {
    return (
        <nav>  
            <div className='nav-link-container'>
                <img src={logo} alt='' className='logo' />
                <ul className='nav-links'>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/about">About</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;