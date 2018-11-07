

import React from 'react';
import { inject } from 'mobx-react';
import {
    Navbar,
    Collapse,
    Nav,
    NavItem,
    NavLink
 } from 'reactstrap';

const Menu = ({session}) => {
    const onClick = (e) => {
        e.preventDefault();
        session.logout();
    }
    return (
        <Navbar color="light" light expand="md">
            <Collapse navbar>
                <Nav className="ml-auto" navbar>
                <NavItem>
                    <NavLink href="#" onClick={onClick}>Logout</NavLink>
                </NavItem>
                </Nav> 
            </Collapse>  
        </Navbar>
    )
}

export default inject("session")(Menu);