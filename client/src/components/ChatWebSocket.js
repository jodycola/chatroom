import React, { useEffect } from 'react'

export default function ChatWebSocket({ connection, roomName, updateMessages }) {

    useEffect(() => {
        connection = connection.cable.subscriptions.create({
            channel: 'RoomChannel',
            title: roomName
        },
        {
            connected: function() {
                console.log("connected...")
            },
            received: function(data) {
                updateMessages(data)
            }
        })
    }, [connection]);

    return (
        <div>

        </div>
    )
}