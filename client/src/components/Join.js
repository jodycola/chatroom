import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default function Join() {
    const [name, setName] = useState("");
    const [room, setRoom] = useState("");
    const [roomArray, setRoomArray] = useState([]);

    useEffect(() => {
    fetch('http://localhost:3000/rooms')
        .then(res => res.json())
        .then(data => setRoomArray(data))
    }, []);
    
    const listRooms = roomArray.map((room) => {
        return <option key={room.id} value={room.name}>{room.name}</option>
    });

    return (
        <JoinStyled>
        <div className="outer">
            <div className="inner">
                <h1> Let's Chat </h1>

                <input 
                    placeholder="Name" 
                    className="input" 
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <select 
                    className="select"
                    onChange={(e) => setRoom(e.target.value)}
                >
                {listRooms}
                </select>

                <Link onClick={ e => (!name || !room) ? e.preventDefault() : null } to={`/chat?name=${name}&room=${room}`}>
                    <button className="button mt-20" type="submit">SIGN IN</button>
                </Link>

            </div>
        </div>
        </JoinStyled>
    )
}

// CSS
const JoinStyled = styled.div`
* {
    box-sizing: border-box;
}

.outer {
    position: absolute;
    left: 40%;
    display: flex;
    justifiy-content: center;
    text-align: center;
    height: 100vh;
    width: 150vh;
    align-items: center;
    background-color: #1A1A1D;
}

.inner {
    width: 25%;
}

.input {
    margin-top: 5px;
    padding: 15px 15px;
    width: 100%;
}

.select {
    margin-top: 5px;
    width: 100%;
    padding: 15px 15px;
}

h1 {
    color: #FFF;
    font-size: 2.5rem;
    padding-bottom: 10px;
    border-bottom: 2px solid #FFF;
}

button {
    margin-top: 20px;
    color: #FFF !important;
    background: #2979FF;
    padding: 20px;
    border-radius: 10px;
    display: inline-block;
    border: none;
    width: 100%;
}

button:hover {
    background: #6ba2ff;
}

@media (min-width: 320px) and (max-width: 480px) {
    .outer {
        height: 100%;
        width: 100%;
    }
}
`
