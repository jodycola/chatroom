import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import Input from './Input';
import Message from './Message';
import styled from 'styled-components';

export default function Chat({ currentUser }) {

    // States & variables
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");
    const [messageList, setMessageList] = useState([]);
    const socket = io('http://localhost:4000/')
    const room = (new URLSearchParams(window.location.search)).get('room');

    // Listens on socket
    useEffect(() => {
      socket.on('message', message => {
      setMessageList([...messageList, message])
      })
    })


    // Handlers
    // Add fetch to update messages in a given chatroom
    const handleSendMessage = (e) => {
      e.preventDefault();
      try {
        socket.emit('message',  [ name, message ] )
        fetch(`http://localhost:3000/add`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({message, currentUser, room})
        })
        .then(res => res.json())
        .then(data => setMessageList(data))
      } catch (error) {
        console.log(error);
      }
      setMessage('');
    };

    return (
        <ChatStyled>
        <h1 className="room-title">{room}</h1>
        <div className="container">
            {messageList.length === 0 ? null :  <Message currentUser={currentUser} message={message} messageList={messageList}/> }
            <Input message={message} setMessage={setMessage} handleSendMessage={handleSendMessage} />
        </div>
        </ChatStyled>
    )
}

// CSS
// @media (min-width: 320px) and (max-width: 480px) {
//   .container {
//     height: 100%;
//     width: 100%;
//   }
// }

// @media (min-width: 480px) and (max-width: 1200px) {
//   .container {
//     width: 100%;
//   }
// }
const ChatStyled = styled.div`
.room-title {
  text-transform: capitalize;
  font-size: 36px;
  color: #FFF;
  border-bottom: 2px #FFF solid;
}

.container {
  position: relative;
  margin: auto;
  height: 500px;
  width: 70%;
  background-color: white;
}

`