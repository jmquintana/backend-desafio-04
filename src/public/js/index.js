// manejar el listener de sockets

const socket = io();
const productItems = document.querySelectorAll(".product-list > li");
const addBtn = document.querySelector(".add-btn");

const handleDelete = (event) => {
	event.stopPropagation();
	console.log(event.target.id);
	socket.emit("delete_product", "{ id: event.target.id }");
};

productItems.forEach((element) => {
	element.addEventListener("click", handleDelete);
});

socket.on("product_added", (data) => addProductElement(data.result));
socket.on("product_deleted", (data) => deleteProductElement(data.result));

const deleteProductElement = (product) => {
	const liToRemove = document.getElementById(product.id);
	liToRemove.remove();
};

const addProductElement = (product) => {
	const ulElement = document.querySelector(".product-list");
	const liElement = document.createElement("li");
	liElement.innerHTML = `<b>Id:</b>${product.id} - <b>Título:</b>	${product.title} - <b>Código:</b> ${product.code}`;
	liElement.id = product.id;
	ulElement.appendChild(liElement);
};

const products = [
	{
		id: 1,
		title: "Zanahoria",
		description: "raíz comestible de la planta Daucus carota",
		price: 50,
		stock: 234,
		thumbnails: [],
		code: "ABC1234",
		status: true,
		category: "verdura",
	},
	{
		id: 2,
		title: "Camote",
		description: "raíz comestible de la planta Ipomoea batatas",
		price: 60,
		stock: 432,
		thumbnails: [],
		code: "DEF5678",
		status: true,
		category: "verdura",
	},
	{
		id: 3,
		title: "Cebolla Verde",
		description: "planta de la familia de los lirios",
		price: 30,
		stock: 567,
		thumbnails: [],
		code: "GHI9012",
		status: true,
		category: "verdura",
	},
	{
		id: 4,
		title: "Ejote Verde",
		description: "vaina comestible de la planta Phaseolus vulgaris",
		price: 40,
		stock: 123,
		thumbnails: [],
		code: "JKL3456",
		status: true,
		category: "verdura",
	},
	{
		id: 5,
		title: "Espinaca",
		description: "hoja comestible de la planta Spinacia oleracea",
		price: 20,
		stock: 345,
		thumbnails: [],
		code: "MNO7890",
		status: true,
		category: "verdura",
	},
	{
		id: 6,
		title: "Nabo",
		description: "raíz comestible de la planta Brassica rapa",
		price: 35,
		stock: 678,
		thumbnails: [],
		code: "PQR1234",
		status: true,
		category: "verdura",
	},
	{
		id: 7,
		title: "Puerro",
		description: "planta de la familia de los lirios",
		price: 25,
		stock: 456,
		thumbnails: [],
		code: "STU5678",
		status: true,
		category: "verdura",
	},
	{
		id: 8,
		title: "Rábano",
		description: "raíz comestible de la planta Raphanus sativus",
		price: 45,
		stock: 789,
		thumbnails: [],
		code: "VWX9012",
		status: true,
		category: "verdura",
	},
	{
		id: 9,
		title: "Remolacha",
		description: "raíz comestible de la planta Beta vulgaris",
		price: 55,
		stock: 321,
		thumbnails: [],
		code: "YZA3456",
		status: true,
		category: "verdura",
	},
	{
		id: 10,
		title: "Calabaza",
		description: "fruto comestible de la planta Cucurbita pepo",
		price: 65,
		stock: 876,
		thumbnails: [],
		code: "BCD7890",
		status: true,
		category: "verdura",
	},
];

const fruits = [
	{
		id: 1,
		title: "Manzana",
		description: "fruto comestible de la planta Malus domestica",
		price: 70,
		stock: 123,
		thumbnails: [],
		code: "ABC1234",
		status: true,
		category: "fruta",
	},
	{
		id: 2,
		title: "Plátano",
		description: "fruto comestible de la planta Musa",
		price: 80,
		stock: 234,
		thumbnails: [],
		code: "DEF5678",
		status: true,
		category: "fruta",
	},
	{
		id: 3,
		title: "Cereza",
		description: "fruto comestible de la planta Prunus avium",
		price: 90,
		stock: 345,
		thumbnails: [],
		code: "GHI9012",
		status: true,
		category: "fruta",
	},
	{
		id: 4,
		title: "Fresa",
		description: "fruto comestible de la planta Fragaria × ananassa",
		price: 100,
		stock: 456,
		thumbnails: [],
		code: "JKL3456",
		status: true,
		category: "fruta",
	},
	{
		id: 5,
		title: "Kiwi",
		description: "fruto comestible de la planta Actinidia deliciosa",
		price: 110,
		stock: 567,
		thumbnails: [],
		code: "MNO7890",
		status: true,
		category: "fruta",
	},
	{
		id: 6,
		title: "Mango",
		description: "fruto comestible de la planta Mangifera indica",
		price: 120,
		stock: 678,
		thumbnails: [],
		code: "PQR1234",
		status: true,
		category: "fruta",
	},
	{
		id: 7,
		title: "Naranja",
		description: "fruto comestible de la planta Citrus × sinensis",
		price: 130,
		stock: 789,
		thumbnails: [],
		code: "STU5678",
		status: true,
		category: "fruta",
	},
	{
		id: 8,
		title: "Pera",
		description: "fruto comestible de la planta Pyrus communis",
		price: 140,
		stock: 890,
		thumbnails: [],
		code: "VWX9012",
		status: true,
		category: "fruta",
	},
	{
		id: 9,
		title: "Piña",
		description: "fruto comestible de la planta Ananas comosus",
		price: 150,
		stock: 901,
		thumbnails: [],
		code: "YZA3456",
		status: true,
		category: "fruta",
	},
	{
		id: 10,
		title: "Uva",
		description: "fruto comestible de la planta Vitis vinifera",
		price: 160,
		stock: 12,
		thumbnails: [],
		code: "BCD7890",
		status: true,
		category: "fruta",
	},
];
