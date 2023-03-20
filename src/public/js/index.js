// manejar el listener de sockets

const socket = io();
const productItems = document.querySelectorAll(".product-list > li");
console.log(productItems);

socket.on("product_added", (data) => {
	const ulElement = document.querySelector(".product-list");
	const liElement = document.createElement("li");
	liElement.innerHTML = `<b>Id:</b>${data.result.id} - <b>Título:</b>	${data.result.title} - <b>Código:</b> ${data.result.code}`;
	liElement.id = data.result.id;
	ulElement.appendChild(liElement);
	console.log(data);
});

socket.on("product_deleted", (data) => {
	const liToRemove = document.getElementById(data.result.id);
	liToRemove.remove();
});
