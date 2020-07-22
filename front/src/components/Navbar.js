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
                <Link to="/heroes">
                    Heroes
                </Link>
                <Link to="/ages">
                    Ages
                </Link>
                Browse by category:
                <Link to="/badass">
                    Badass
                </Link>
                <Link to="/funny">
                    Funny
                </Link>
                <Link to="/inspirationnal">
                    Inspirationnal
                </Link>
            </Drawer>
        </div>
    )
}


export default Navbar;