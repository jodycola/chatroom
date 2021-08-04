import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

export default function Message({ message, messageList }) {
    
    // State and variables
    const [roomMessages, setRoomMessages] = useState([])
    const room = (new URLSearchParams(window.location.search)).get('room');

    // useEffect to grab Chatroom messages
    useEffect(() => {
        fetch(`http://localhost:3000/room/${room}`)
            .then(res => res.json())
            .then(data => setRoomMessages(data.messages))
    }, [room]);

    console.log(roomMessages);
    const displayMessage = roomMessages.map((message, index) => {
        return <p key={index} className='text'> {message.body} </p>
    })


    // Display messages as mapped product in JSX
    // const displayMessage = messageList.map((message, index) => {
    //     return <p key={index} className={`text ${message.currentUser ? "my-message" : "received-message"}`}> {message} </p>
    // })

    return (
        <MessageStyle>
        <div className="container">
            <div className="box">
                {displayMessage}
            </div>
        </div>
        </MessageStyle>
    )
}

// CSS

const MessageStyle = styled.div`
.container {
    display: flex;
    width: 20%;
}

.box {
    position: relative;
    justify-content: flex-end;
    align-items: center;
}

.text {
    display: inline-block;
    position: relative;
    flex: auto;
    overflow: auto;
    color: #FFF;
    background-image: linear-gradient(#99c2ff, #0066ff);
    padding: 10px 10px;
    font-size: 25px;
    border-radius: 10px;
    width: 100%;
    letter-spacing: 0;
    font-size: 1.5em;
    word-wrap: break-word;
}

`