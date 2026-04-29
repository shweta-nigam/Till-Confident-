export const setupSocket = (io) => {
  io.on("connection", (socket) => {
    console.log("User connected:", socket.id);

    socket.on("join_poll", (pollId) => {
      socket.join(pollId);
    });
  });
};