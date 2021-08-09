const express = require("express"),
	  http = require("http"),
	  socketio = require("socket.io")


const app = express(),
	  server = http.createServer(app),
	  sio = socketio(server)

app.use(express.static(__dirname + "/public/templates"))
app.use(express.static(__dirname + "/public"))


sio.on("connect", socket => {
	socket.emit("message", "Welcome to chat...")

	socket.broadcast.emit("message", "Someone has been connected...")

	socket.on("server", data => sio.emit("message", data))

	socket.on("disconnect", () => sio.emit("message", "Someone has been disconnected"))
})


const port = process.env.PORT || 3000
server.listen(port, () => console.log(`http://localhost:${port}`))
