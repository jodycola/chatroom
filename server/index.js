const server = require("http").createServer();
const io = require("socket.io")(server, {
  cors: {
    origin: "*",
  },
});

const PORT = 4000;
const NEW_CHAT_MESSAGE_EVENT = "newChatMessage";

io.on("connection", (socket) => {

  // Join a conversation
  // Use rails for this logic
  const { room, currentUser } = socket.handshake.query;
  socket.join({ room, currentUser });

  // Listen for new messages
  socket.on(NEW_CHAT_MESSAGE_EVENT, (data) => {
    io.in(room).emit(NEW_CHAT_MESSAGE_EVENT, data);
  });

  // Leave the room if the user closes the socket
  // Use rails for this logic
  socket.on("disconnect", () => {
    socket.leave(room);
  });
});

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});