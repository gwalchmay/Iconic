import React, { useState } from 'react';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import burgerIcon from '../images/burgerIcon.png';
import logo2 from '../images/logo2.png';
import '../styles/BurgerMenu.css';


function BurgerMenu() {
    const [left, setLeft] = useState(false);

    const sideList = (
        <div className="burgerMenu">
            <Link to="/" className="burgerLink">
                <h3>Home</h3>
            </Link>
            <Link to="/heroes" className="burgerLink">
                Heroes
                </Link>
            <Link to="/ages" className="burgerLink">
                Ages
            </Link>
                Browse by category:
            <Link to="/scenes/badass" className="burgerLink">
                Badass
                </Link>
            <Link to="/scenes/funny" className="burgerLink">
                Funny
            </Link>
            <Link to="/scenes/inspirationnal" className="burgerLink">
                Inspirationnal
            </Link>
        </div>
    );

    return (
        <div>
            <div className='phoneTitle'>
                <Button onClick={() => setLeft(true)}><img src={burgerIcon} className="logoburger" alt="small basket icon" /></Button>
                <img src={logo2} alt='alternate logo' />
            </div>
            <Drawer anchor="left" open={left} onClose={() => setLeft(false)}>
                <div
                    tabIndex={0}
                    role="button"
                    onClick={() => setLeft(false)}
                    onKeyDown={() => setLeft(false)}
                >
                    {sideList}
                </div>
            </Drawer>
        </div >
    );
}

export default BurgerMenu;
