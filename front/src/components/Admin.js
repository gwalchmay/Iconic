import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/Admin.css';

const API_URL = process.env.REACT_APP_API_URL;

function Admin() {
    const [newHero, setNewHero] = useState()
    const [heroes, setHeroes] = useState([])

    const handleNewHero = (e) => {
        const { name, value } = e.target;
        setNewHero(() => ({
            [name]: value
        }));
    };

    function createNewHero() {
        axios.post(`http://localhost:8000/api/hero`, newHero)
            .then((res) => res.data)
            .then((data) => {
                alert(`New hero : ${data.name}`);
                setNewHero()
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
    }, []);



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
                    <input type="text" name="title" onChange={handleNewScene} placeholder='Title' />
            </div>
                <div className='adminColumn'>
                    Add a new user:
                    <form>

                    </form>
                </div>
            </div>
        </div>
    )
}


export default Admin;