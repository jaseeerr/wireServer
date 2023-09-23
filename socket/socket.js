const { Server } = require("socket.io");
const cors = require("cors");


// Export a function to create and configure the Socket.io server
module.exports = function (server) {
  const io = new Server(server, {
    cors: {
      origin: "*",
    },
  });


  io.on("connection", (socket) => {
    console.log(`user connected ${socket.id}`)

    // Join Chat
    socket.on("join_room", (data) => {
      socket.join(data)
      console.log(data,"joined")
   
    })

    socket.on('CallLogs',(data)=>{
      console.log("11");
        console.log(data)
    })



    socket.on('disconnect',()=>{
        console.log("userDisconnected")
    })

  })
}
              