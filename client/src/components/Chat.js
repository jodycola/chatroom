import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import Input from './Input';
import Message from './Message';
import styled from 'styled-components';

export default function Chat({ currentUser }) {
    const [room, setRoom] = useState("");
    const [name, setName] = useState("");

    const socket = io('http://localhost:4000/')

    const [message, setMessage] = useState("");
    const [messageList, setMessageList] = useState([]);

    useEffect(() => {
      socket.on('message', message => {
      setMessageList([...messageList, message])
      })
    })


    const handleSendMessage = (e) => {
      e.preventDefault();
      try {
        setName(Object.values(currentUser)[1]);
        socket.emit('message',  [ name, message ] ) 
      } catch (error) {
        console.log(error);
      }
      setMessage('');
    };

    return (
        <ChatStyled>
        <div className="container">
            <h1 className="room-title">{room}</h1>
            {messageList.length === 0 ? null : <div className="messages"> <Message currentUser={currentUser} message={message} messageList={messageList}/> </div>}
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