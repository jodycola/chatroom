const app = require('express')()
const server = require('http').createServer(app)
const io = require('socket.io')(server,{
    cors:{
        origin:'*',
    }
})

io.on('connection', socket =>{
    socket.on('message', payload => {
      io.emit('message', payload)
    })
})

server.listen(4000,()=>{
    console.log('I am listening at port: 4000)');
})