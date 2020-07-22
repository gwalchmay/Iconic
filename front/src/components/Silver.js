import React from 'react';
import silver from '../images/Silver.jpg';
import { Link } from 'react-router-dom';

function Silver() {
    return (
        <div className='ageContainer'>
            <Link to='/'>
                <img src={silver} alt='Showcase #4' />
                <h2>The Silver Age</h2>
                <p>The Silver Age of Comic Books was a period of artistic advancement and widespread commercial
                success in mainstream American comic books, predominantly those featuring the superhero archetype.
                Following the Golden Age of Comic Books and an interregnum in the early to mid-1950s, the Silver Age is
                considered to cover the period from <b>1956 to circa 1970</b></p>
            </Link>
        </div>
    )
}

export default Silver;