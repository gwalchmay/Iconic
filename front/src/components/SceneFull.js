import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import '../styles/SceneFull.css';

function SceneFull() {
    const { id } = useParams();
    const [scene, setScene] = useState();
    const [showModal, setShowModal] = useState(false)


    useEffect(() => {
        function getScene() {
            axios.get(`http://localhost:8000/api/post/${id}`)
                .then((res) => { setScene(res.data) });
        }
        getScene();
    }, []);


    if (scene !== undefined) {
        return (
            <div className='sceneFullContainer'>
                {showModal ? <div className='sceneFullModalContainer' onClick={() => setShowModal(false)} ><img src={`http://localhost:8000/images/${scene.filename}`} className='sceneFullModal' /></div> : null}
                <div className='sceneFullCard'>
                    <img src={`http://localhost:8000/images/${scene.filename}`} className='sceneFullImage' onClick={() => setShowModal(true)} />
                    <h2>{scene.title}</h2>
                    <p>Issue: {scene.comic} from {(new Date(scene.date)).toLocaleDateString('en-EN', { month: 'long', year: 'numeric' })}</p>
                    <p>{scene.longD}</p>
                </div>
            </div>
        )
    } else {
        return (
            <h1>Loading</h1>
        )
    }
}


export default SceneFull;