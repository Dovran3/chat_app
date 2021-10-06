const socket = io()

socket.on("message", data => {
	const p = document.createElement("p")
	const element = document.getElementsByClassName("container__messages")[0]
	p.innerHTML = data
	element.appendChild(p)
	element.scrollTop = element.scrollHeight
})

function send(){
	const answer = document.getElementsByTagName("input")[0].value
	document.getElementsByTagName("input")[0].value = ""
	document.getElementsByTagName("input")[0].focus()
	socket.emit("server", answer)
}
