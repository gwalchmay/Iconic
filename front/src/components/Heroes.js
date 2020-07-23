import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import travaux from '../images/travaux.jpg';
import '../styles/Heroes.css';

const APP_URL = process.env.REACT_APP_API_URL;

function Heroes() {
    const [heroes, setHeroes] = useState([]);
    let previousChar = '';

    useEffect(() => {
        function getHeroes() {
            axios.get(`${APP_URL}/api/hero`)
                .then((res) => res.data)
                .then((data) => { setHeroes(data); });
        }
        getHeroes();
    }, []);

    return (
        <div className='heroesContainer'>
            <img src={travaux} alt='en travaux' style={{width : 400 }}/>
            {heroes.map((hero) => {
                if (hero.name.charAt(0) !== previousChar) {
                    previousChar = hero.name.charAt(0);
                    return (
                        <div className="heroesList">
                            <div className="initial">
                                {previousChar}
                            </div>
                            <ul className="firstAfterInitial">
                                <li key={hero.id}><Link to={'/heroes/' + hero.id} className='heroesListItem'>{hero.name}</Link></li>
                            </ul>
                        </div>
                    )
                }
                else {
                    return (
                        <div>
                            <ul className="afterFirstAfterInitial">
                                <li key={hero.id}><Link to={'/heroes/' + hero.id} className='heroesListItem'>{hero.name}</Link></li>
                            </ul>
                        </div>
                    )
                }
            })
            }
        </div>
    )
}

export default Heroes;