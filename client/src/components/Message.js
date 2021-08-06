import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

export default function Message({ message, messages }) {
    
    // State and variables
    const room = (new URLSearchParams(window.location.search)).get('room');

    // Display JSX
    let display

    return (
        <MessageStyle>
        <div className="container">
            <div className="box">
                {display}
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