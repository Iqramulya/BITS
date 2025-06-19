import React from 'react'
import { Container, Row} from 'reactstrap'

import '../styles/AdminNav.css'

import { NavLink } from 'react-router-dom'

const admin_nav = [
    {
        display: 'Dashboard',
        path: '/dashboard'
    },
    {
        display: 'Product',
        path: '/dashboard/products'
    },
    {
        display: 'Add Product',
        path: '/dashboard/add-product'
    },
    {
        display: 'Orders',
        path: '/dashboard/orders'
    },
]

const AdminNav = () => {

    return (
        <>
        <header className='admin_header'>
                <Container>
                    <Row>
                    <div className='admin_nav-wrapper-top'>
                        <div className="admin_navigation p-0">
                            <ul className="admin_menu-list">
                                {
                                    admin_nav.map((item, index)=>(
                                        <li className="admin_menu-item" key={index}>
                                            <NavLink 
                                            to={item.path} 
                                            className={navClass => 
                                                navClass.isActive ? "active_admin-menu" : ''}>{item.display}</NavLink>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>

                    </Row>
                </Container>
        </header>
        </>
    )
}

export default AdminNav
