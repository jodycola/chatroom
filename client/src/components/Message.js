import React from 'react';
import styled from 'styled-components';

export default function Message({ message, messages }) {
    return (
        <MessageStyle>
        <div className="container">
            <div className="box">
                {messages.map((message, i) => (
                    <div key={i} className={`text ${message.currentUser ? "my-message" : "received-message"}`}>
                        {message.body}
                    </div>
                ))}
            </div>
        </div>
        </MessageStyle>
    )
}

const MessageStyle = styled.div`
.container {
    display: flex;
    justify-content: flex-end;
    padding: 0 5%;
    margin-bottom: 20rem;
    margin-right: 15rem;
}

.box {
    background: #F3F3F3;
    border-radius: 20px;
    padding: 5px 20px;
    color: white;
    display: inline-block;
    max-width: 80%;
}

.text {
    color: black;
    width: 100%;
    letter-spacing: 0;
    float: left;
    font-size: 1.5em;
    word-wrap: break-word;
}

.sent-text {
    display: flex;
    align-items: center;
    font-family: Helvetica;
    color: #828282;
    letter-spacing: 0.3px;
}
`