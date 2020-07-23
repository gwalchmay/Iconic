import React, { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';
import Scene from './Scene';
import '../styles/Home.css';

function Scenes() {
    const [scenes, setScenes] = useState([]);
    const [heroes, setHeroes] = useState([]);
    const {tag} = useParams();


    useEffect(() => {
        function getScenes() {
            axios.all([
                axios.get(`http://localhost:8000/api/post/tag/${tag}`),
                axios.get(`http://localhost:8000/api/hero`)])
                .then((res) => { setScenes(res[0].data); setHeroes(res[1].data); });
        }
        getScenes();
    }, [tag]);

    return (

        <div className='homeContainer'>
            {scenes.map(scene =>
                <Scene props={scene} />
            )}
        </div>
    )
}


export default Scenes;