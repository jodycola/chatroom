import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import Input from './Input';
import Message from './Message';
import useMessage from '../hooks/useMessage';
import styled from 'styled-components';

let socket;

export default function Chat({ currentUser }) {
    const [room, setRoom] = useState("");

    const ENDPOINT = 'http://localhost:4000/'

    const [message, setMessage] = useState("");
    const { messages, sendMessage } = useMessage(currentUser, room);

    console.log(messages);

    const handleSendMessage = (e) => {
        e.preventDefault();

        // useMessage hook
        sendMessage(message, currentUser);
        setMessage('');

        // Rails api
        fetch(`http://localhost:3000/room`, {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(room)
        })
        .then(res => res.json())
        .then(console.log)
    };

    useEffect(() => {
        const room = (new URLSearchParams(window.location.search)).get('room');
        
        setRoom(room);

        socket = io(ENDPOINT);

        socket.emit('join', { room, currentUser }, ( ) => {

        });

        return () => {
        }
    }, [ENDPOINT, currentUser, room])

    return (
        <ChatStyled>
        <div className="container">
            <h1 className="room-title">{room} </h1>
            {messages.length === 0 ? null : <div className="messages"> <Message currentUser={currentUser} message={message} messages={messages}/> </div>}
            <Input message={message} setMessage={setMessage} handleSendMessage={handleSendMessage} />
        </div>
        </ChatStyled>
    )
}

// CSS
const ChatStyled = styled.div`
.container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100%;
    background-color: #1A1A1D;
}

h1 {
    position: absolute;
    text-transform: capitalize;
    top: 0;
    left: 50px;
    font-size: 50px;
    color: #FFF;
    border-bottom: 2px #FFF solid;
}

.messages {
  padding: 5% 0;
  overflow: auto;
  flex: auto;
}

@media (min-width: 320px) and (max-width: 480px) {
  .container {
    height: 100%;
    width: 100%;
  }
}

@media (min-width: 480px) and (max-width: 1200px) {
  .container {
    width: 100%;
  }
}
`