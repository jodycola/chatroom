import React from 'react';
import styled from 'styled-components';

export default function Message({ currentUser, message, messages }) {
    const name = (new URLSearchParams(window.location.search)).get('name');

    return (
        <MessageStyle>
        <div className="container">
            <div className="box">
                {messages.map((message, i) => (
                    <div key={i} className={`text ${message.currentUser ? "my-message" : "received-message"}`}>
                        {message.body}
                    </div>
                ))}
                <div className="user">
                    {currentUser.name}
                </div>
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
    position: relative;
    right: 50px;
    border-radius: 20px;
    padding: 5px 20px;
    display: inline-block;
    max-width: 80%;
}

.text {
    color: white;
    width: 100%;
    letter-spacing: 0;
    float: left;
    font-size: 1.5em;
    word-wrap: break-word;
}

.user {
    position: relative;
    top: 10px;
    left: 150px;
    font-family: Helvetica;
    color: #FFF;
    letter-spacing: 0.3px;
}

.my-message {
    margin-left: 50px;
	background-image: linear-gradient(#99c2ff, #0066ff);
    position: relative;
	display: inline-block;
	padding: 10px 20px;
	color: #fff;
	font-size: 25px;
    border-radius: 10px;
}

.received-message {
    right: 250px;
	background-image: linear-gradient(#ff8080, #ff0000);
    position: relative;
	display: inline-block;
	padding: 10px 20px;
	color: #fff;
	font-size: 25px;
    border-radius: 10px;
}
`