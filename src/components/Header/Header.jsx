import React from 'react'
import { useState } from 'react';
import {NavLink} from 'react-router-dom';
import './Header.css'

const nav_links = [
    {
        path: 'home',
        display: 'Home'
    },
    {
        path: 'shop',
        display: 'Shop'
    },
    {
        path: 'wishlist',
        display: 'Wishlist'
    }
]

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
    return (
        <nav className={`navbar-section ${menuOpen ? 'active' : ''}`}>
            <div className="navbar-container">
                <div className="navbar-logo">
                    <img src='bits.svg' alt="" />
                    <a href="">BITS</a>
                </div>
                <div className="navbar-main-link">
                    <ul className={`menu ${menuOpen ? 'active' : ''}`}>
                        {
                            nav_links.map((item, index) => (
                                <li className="nav_item" key={index}>
                                    <NavLink
                                        to={item.path}
                                        activeClassName="nav_active"
                                        onClick={toggleMenu}
                                    >
                                        {item.display}
                                    </NavLink>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className="navbar-icons-link">
                    <a href="/chat-admin"><i className='bx bx-message-minus'></i></a>
                    <a href="/cart"><i className='bx bx-cart' ></i></a>
                    <a href="/profile"><i className='bx bx-user'></i></a>
                    <div className="burger-button" onClick={toggleMenu}>
                        <i className='bx bx-menu'></i>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Header
