import React, { useState } from 'react';
import Input from './Input'
import useMessage from '../useMessage/useMessage';
import styled from 'styled-components';

export default function Chat(props) {
    // Concatentated to get room from url params
    const room = (new URLSearchParams(window.location.search)).get('room');

    const [message, setMessage] = useState("");
    const { messages, sendMessage } = useMessage(room);

    const handleSendMessage = (e) => {
        e.preventDefault()
        sendMessage(message);
        setMessage('');
    };

    return (
        <ChatStyled>
        <div className="container">
            <h1 className="room-title"> {room} </h1>
            <div className="messages-container">
                <ol className="messages-list">
                    {messages.map((message, i) => (
                        <li
                            key={i}
                            className={`message-item ${message.currentUser ? "my-message" : "received-message"}`}
                        >
                            {message.body}
                        </li>
                    ))}
                </ol>
            </div>
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

.message-item {
    color: white;
    font-size: 36px;
}

.message-list {
    position: fixed;
    bottom: 0;
}

li {
    padding: 0;
    list-style-type: none;
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