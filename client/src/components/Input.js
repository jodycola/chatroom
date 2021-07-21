import React from 'react'
import styled from 'styled-components';

export default function Input({ message, setMessage, handleSendMessage }) {

    return (
    <InputStyled>
    <form className="form">
        <textarea
            className="input"
            type="text"
            placeholder="Type a message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
        />
        <button className="sendButton" onClick={(e) => handleSendMessage(e)}> Send </button>
    </form>
    </InputStyled>
    )
}

// CSS
const InputStyled = styled.div`
.form {
    display: flex;
    position: fixed;
    bottom: 0;
    height: 50px;
    width: 100%;
    left: 10%;
}

textarea {
    width: 50%;
    font-size: 1.2em;
}

.sendButton {
    color: #fff !important;
    text-transform: uppercase;
    background: #2979FF;
    display: inline-block;
    border: 2px solid #2979FF;
    width: 10%;
}
`