import React from 'react';
import Logo from '../images/logo.png';
import '../styles/Navbar.css';
import Drawer from '@material-ui/core/Drawer';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div className='navbarBg'>
            <Drawer variant='permanent' anchor='left'>
                <Link to="/">
                    <img src={Logo} alt='logo' />
                </Link>
            </Drawer>
        </div>
    )
}


export default Navbar;