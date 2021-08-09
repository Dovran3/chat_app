const socket = io()

socket.on("message", data => {
	let p = document.createElement("p")
	p.innerHTML = data
	document.getElementById("messages").appendChild(p)
})

function send(){
	let answer = document.getElementsByTagName("input")[0].value
	document.getElementsByTagName("input")[0].value = ""
	document.getElementsByTagName("input")[0].focus()
	socket.emit("server", answer)
}