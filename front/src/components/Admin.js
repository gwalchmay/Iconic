import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/Admin.css';

const API_URL = process.env.REACT_APP_API_URL;

function Admin() {
    const [newHero, setNewHero] = useState();
    const [heroes, setHeroes] = useState([]);
    const [newScene, setNewScene] = useState({ picture_id: 1 });
    const [newUser, setNewUser] = useState();
    const [reload, setReload] = useState(false);
    const [file, setFile] = useState(null);
    const [filePreview, setFilePreview] = useState(null);

    const handleNewHero = (e) => {
        const { name, value } = e.target;
        setNewHero(() => ({
            [name]: value
        }));
    };

    const handleNewScene = (e) => {
        const { name, value } = e.target;
        setNewScene((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleNewUser = (e) => {
        const { name, value } = e.target;
        setNewUser((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleFile = (e) => {
        setFile(e.target.files[0]);
        setFilePreview(URL.createObjectURL(e.target.files[0]));
    };


    function createNewHero(e) {
        e.preventDefault();
        axios.post(`http://localhost:8000/api/hero`, newHero)
            .then((res) => res.data)
            .then((data) => {
                alert(`New hero : ${data.name}`);
                setNewHero()
                setReload(!reload)
            })
            .catch((e) => {
                console.error(e);
                alert(`Erreur : ${e.message}`);
            });
    }

    function createNewHero(e) {
        e.preventDefault();
        if (file.type !== 'image/jpeg' && file.type !== 'image/jpg' && file.type !== 'image/png') {
            alert('Only jpeg/jpg and png are allowed');
        } else {
            const data = new FormData();
            data.append('file', file);
            axios.post(`${API_URL}/api/upload/`, data)
                .then((res) => res.data)
                .then((res) => {
                    const newScene2 = { ...newScene, picture_id: res.id };
                    return newScene2;
                })
                .then((newScene) => axios.post(`${API_URL}/api/post`, newScene)
                    .then((res) => res.data)
                    .then(() => {
                        alert('Scene added !');
                    }))
                .catch((e) => {
                    console.error(e);
                    alert(`Error : ${e.message}`);
                });
        }
    }

    function createNewUser(e) {
        e.preventDefault();
        axios.post(`http://localhost:8000/api/user`, newUser)
            .then((res) => res.data)
            .then((data) => {
                alert(`New user : ${data.username}`);
                setNewScene()
                setReload(!reload)
            })
            .catch((e) => {
                console.error(e);
                alert(`Erreur : ${e.message}`);
            });
    }

    useEffect(() => {
        function getHeroes() {
            axios.get(`http://localhost:8000/api/hero`)
                .then((res) => res.data)
                .then((data) => { setHeroes(data); });
        }
        getHeroes();
    }, [reload]);



    return (
        <div className='adminBg'>
            <h1>Admin</h1>
            <div className='adminFlexContainer'>
                <div className='adminColumn'>
                    Add a new hero :
                    <form>
                        <input type="text" name="name" onChange={handleNewHero} placeholder='Name' />
                        <button type='button' onClick={createNewHero}>Submit</button>
                    </form>
                </div>
                <div className='adminColumn'>
                    Add a new scene:
                    <form className='adminForm' onSubmit={createNewHero} encType="multipart/form-data">
                        <input type="text" name="title" onChange={handleNewScene} placeholder='Title' />
                        <input type="text" name="shortD" onChange={handleNewScene} placeholder='Short description' />
                        <input type="text" name="longD" onChange={handleNewScene} placeholder='Long description' />
                        <select name="publisher" id="publisher-select" onChange={handleNewScene}>
                            <option value="">Choose a publisher</option>
                            <option value="DC">DC</option>
                            <option value="Marvel">Marvel</option>
                            <option value="Others">Others</option>
                        </select>
                        <select name="hero_id" id="hero-select" onChange={handleNewScene}>
                            <option value="">Choose a hero</option>
                            {heroes.map((hero) => (
                                <option value={hero.id}>
                                    {hero.name}
                                </option>
                            ))};
                        </select>
                        {newScene.hero_id ? <select name="hero_id2" id="hero-select" onChange={handleNewScene}>
                            <option value="">Choose a hero</option>
                            {heroes.map((hero) => (
                                <option value={hero.id}>
                                    {hero.name}
                                </option>
                            ))}
                        </select>
                            : <></>
                        }
                        {newScene.hero_id2 ? <select name="hero_id3" id="hero-select" onChange={handleNewScene}>
                            <option value="">Choose a hero</option>
                            {heroes.map((hero) => (
                                <option value={hero.id}>
                                    {hero.name}
                                </option>
                            ))}
                        </select>
                            : <></>
                        }
                        <select name="category" id="category-select" onChange={handleNewScene}>
                            <option value="">Choose a category</option>
                            <option value="badass">Badass</option>
                            <option value="funny">Funny</option>
                            <option value="inspirationnal">Inspîrationnal</option>
                        </select>
                        <input type="text" name="comic" onChange={handleNewScene} placeholder='Comic title and number' />
                        <input type="date" name="date" onChange={handleNewScene} />
                        <input type="file" onChange={handleFile} />
                        <img src={filePreview} alt="uploaded product" />
                        <button type='submit'>Create</button>
                    </form>
                </div>
                <div className='adminColumn'>
                    Add a new user:
                    <form className='adminForm' onSubmit={createNewUser}>
                        <input type="text" name='username' onChange={handleNewUser} placeholder='New username' />
                        <input type="password" name='password' onChange={handleNewUser} placehoder='Password' />
                        <button type='submit'>Create</button>
                    </form>
                </div>
            </div>
        </div>
    )
}


export default Admin;