import React from 'react';
import '../styles/Home.css';
import { Link } from 'react-router-dom';

const APP_URL = process.env.REACT_APP_API_URL;

function Scene(props) {
    const scene = props
    return (
        <div className='homeSceneContainer'>
            <div className='homeSceneText'>
                <h2>{scene.props.title}</h2>
                <p>{scene.props.shortD}</p>
                <Link to={`/scene/${scene.props.id}`}>
                    LEARN MORE
                </Link>
                <p>Tag: <Link to={`/scenes/${scene.props.category}`}>{scene.props.category}</Link> </p>
            </div>
            <img src={`${APP_URL}/images/${scene.props.filename}`} className='homeSceneImage' />
        </div >
    )
}


export default Scene;