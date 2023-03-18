// manejar el listener de sockets

const socket = io();

socket.emit("message", "Hooooolaaaaaaa");

socket.on("product_added", (data) => {
	console.log(data);
});
