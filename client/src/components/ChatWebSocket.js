import React, { useEffect } from 'react'

export default function ChatWebSocket({ connection, roomName }) {

    useEffect(() => {
        connection = connection.cable.subscriptions.create({
            channel: 'RoomsChannel',
            title: roomName
        },
        {
            received: function(data) {
            }
        })
    }, [connection]);

    return (
        <div>
            
        </div>
    )
}

// updateRoom = (newRoom) => {
//     setState({
//         currentRoom: {
//             room: newRoom.room,
//             user: newRoom.users,
//             message: newRoom.messages
//         }
//     })
// }