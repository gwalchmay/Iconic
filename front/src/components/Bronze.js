import React from 'react';
import bronze from '../images/Bronze.jpg';
import { Link } from 'react-router-dom';

function Bronze() {
    return (
        <div className='ageContainer'>
            <Link to='/'>
                <img src={bronze} alt='Amazing Spider-Man #122' />
                <h2>The Bronze Age</h2>
                <p>The Bronze Age of Comic Books is usually said to run from <b>1970 to 1984</b>.
            The Bronze Age retained many of the conventions of the Silver Age, with traditional superhero titles remaining the mainstay
            of the industry. However, a return of darker plot elements and storylines more related to relevant social issues, such as
            racism, began to flourish during the period, prefiguring the later Modern Age of Comic Books. </p>
            </Link>
        </div>
    )
}

export default Bronze;