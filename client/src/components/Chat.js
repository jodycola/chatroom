import React, { useState } from 'react';
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
    // useEffect(() => {
    //   socket.on('message', message => {
    //   setMessageList([...messageList, message])
    //   })
    // })


    // Handlers
    const sendMessage = (e) => {
      e.preventDefault()
      console.log(message)
      setMessage('')
    };
    // const handleSendMessage = async (e) => {
    //   e.preventDefault();
    //   try {
    //     let response = socket.emit('message',  [ name, message ] )
    //   } catch (error) {
    //     console.log(error);
    //   }
    //   setMessage('')
    //   // io.emit('message', message)
    // };
  
    return (
        <ChatStyled>
        <h1 className="room-title">{room}</h1>
        <div className="container">
            {messageList.length === 0 ? null :  <Message currentUser={currentUser} message={message} messageList={messageList}/> }
            <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
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