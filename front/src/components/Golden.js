import React from 'react';
import golden from '../images/Golden.jpg';
import { Link } from 'react-router-dom';

function Golden() {
    return (
        <div className='ageContainer'>
            <Link to='/age/golden'>
                <img src={golden} alt='Action Comics #1' />
                <h2>The Golden Age</h2>
                <p className='agesText'>The Golden Age of Comic Books describes an era of American comic books from <b>1938 to 1956</b>.
            During this time, modern comic books were first published and rapidly increased in popularity.
            The superhero archetype was created and many well-known characters were introduced, including Superman,
            Batman, Captain Marvel, Captain America, and Wonder Woman. </p>
            </Link>
        </div>
    )
}

export default Golden;