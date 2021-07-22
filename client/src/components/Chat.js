import React, { useState } from 'react';
import Input from './Input';
import Message from './Message';
import useMessage from '../useMessage/useMessage';
import styled from 'styled-components';

export default function Chat(props) {
    // Concatentated to get room from url params
    const room = (new URLSearchParams(window.location.search)).get('room');

    const [message, setMessage] = useState("");
    const { messages, sendMessage } = useMessage(room);

    const handleSendMessage = (e) => {
        e.preventDefault();
        sendMessage(message);
        setMessage('');
    };

    return (
        <ChatStyled>
        <div className="container">
            <h1 className="room-title"> Room Name: {room} </h1>
            {messages.length === 0 ? null : <div className="messages"> <Message message={message} messages={messages}/> </div>}
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