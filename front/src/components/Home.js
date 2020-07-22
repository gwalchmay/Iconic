import React, { useState, useEffect } from 'react';
import axios from 'axios';

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

        <div>
            {scenes.map(scene =>
                <div>
                    <h2>{scene.title}</h2>
                    <p>{scene.shortD}</p>
                    <img src={`http://localhost:8000/images/${scene.filename}`} />
                    <p>Tag: {scene.category} </p>
                </div>
            )}
        </div>
    )
}


export default Home;