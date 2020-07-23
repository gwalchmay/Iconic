import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Scene from './Scene';
import '../styles/Home.css';

function Home() {
    const [scenes, setScenes] = useState([]);
    const [heroes, setHeroes] = useState([]);


    useEffect(() => {
        function getScenes() {
            axios.all([
                axios.get(`http://localhost:8000/api/post`),
                axios.get(`http://localhost:8000/api/hero`)])
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