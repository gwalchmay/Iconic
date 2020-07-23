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
                    <img src={Logo} alt='logo' className='navbarLogo' />
                </Link>
                <h5 className='navbarSubtitle'>Scenes from the super-world</h5>
                <div className='navbarList'>
                    <Link to="/heroes">
                        Heroes
                </Link>
                    <Link to="/ages">
                        Ages
                </Link>
                Browse by category:
                <Link to="/scenes/badass">
                        Badass
                </Link>
                    <Link to="/scenes/funny">
                        Funny
                </Link>
                    <Link to="/scenes/inspirationnal">
                        Inspirationnal
                </Link>
                </div>
            </Drawer>
        </div>
    )
}


export default Navbar;