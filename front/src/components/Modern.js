import React from 'react';
import modern from '../images/Modern.jpg';
import { Link } from 'react-router-dom';

function Modern() {
    return (
        <div className='ageContainer'>
            <Link to='age/modern'>
                <img src={modern} alt='Watchmen #1' />
                <h2>The Modern Age</h2>
                <p className='agesText'>The Modern Age of Comic Books is generally considered to have <b>begun in the mid-1980s</b> and continues through the
                present day. During approximately the first 15 years of this period, many comic book characters were redesigned,
                creators gained prominence in the industry, independent comics flourished, and larger publishing houses became
                more commercialized.
                Also called the Dark Age, due to the popularity and artistic influence of titles such as
            Batman: The Dark Knight Returns and Watchmen.</p>
            </Link>
        </div>
    )
}

export default Modern;