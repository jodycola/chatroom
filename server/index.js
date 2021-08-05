const app = require('express')()
const server = require('http').createServer(app)
const fetch = require('node-fetch');
const { publishToQueue } = require('./services/MQService');
const io = require('socket.io')(server,{
    cors:{
        origin:'*',
    }
});


io.on('connection', socket =>{
    socket.on('message', payload => {
        fetch('http://localhost:3000/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({payload})
        })
        .then(res => {
            if (res.ok) {
                return res.json();
            } else {
                return res.json().then((data) => {
                    throw data;
                })
            }
        })
        .then(data => {
            let message = data.body
            publishToQueue('user-messages', message)
        })
    })
})

server.listen(4000,()=>{
    console.log('I am listening at port: 4000)');
})