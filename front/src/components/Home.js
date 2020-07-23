import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Scene from './Scene';
import '../styles/Home.css';

const APP_URL = process.env.REACT_APP_API_URL;

function Home() {
    const [scenes, setScenes] = useState([]);
    const [heroes, setHeroes] = useState([]);


    useEffect(() => {
        function getScenes() {
            axios.all([
                axios.get(`${APP_URL}/api/post`),
                axios.get(`${APP_URL}/api/hero`)])
                .then((res) => { setScenes(res[0].data); setHeroes(res[1].data); });
        }
        getScenes();
    }, []);

    return (

        <div className='homeContainer'>
            {scenes.map(scene =>
                <Scene props={scene} />
            )}
        </div>
    )
}


export default Home;