import React, { useState, useEffect } from 'react';
import Input from './Input';
import Message from './Message';
import ChatWebSocket from './ChatWebSocket';
import styled from 'styled-components';

export default function Chat({ connection, currentUser }) {

    // States & variables
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState({ messages: [] });
    const [currentRoom, setCurrentRoom] = useState(null);
    const roomName = (new URLSearchParams(window.location.search)).get('room');

    // Update the currentRoom state
    useEffect(() => {
      fetch(`http://localhost:3000/room/${roomName}`)
            .then(res => res.json())
            .then(data => setCurrentRoom(data))
    }, [setCurrentRoom])

    // Send Message handler
    const sendMessage = (e) => {
      e.preventDefault()
      fetch(`http://localhost:3000/add`, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({ message, currentUser, currentRoom })
      })
      .then(res => res.json())
      // .then(data => updateMessages(data))
      setMessage('')
    };

    // Message list updater
    const updateMessages = (data) => {
      setMessages(prevState => [ ...prevState, { messages: data } ]);
    }
  
    return (
        <ChatStyled>
        <h1 className="room-title">{roomName}</h1>
        <div className="container">
            <Message currentUser={currentUser} message={message} messages={messages}/>
            <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
        </div>
        <ChatWebSocket 
          connection={connection}
          roomName={roomName}
          updateMessages={updateMessages}
        />
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
  height: 525px;
  width: 65%;
  background-color: white;
}

`