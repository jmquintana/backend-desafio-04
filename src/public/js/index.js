const socket = io();
const productItems = document.querySelectorAll(".product-list > li");
const addBtn = document.querySelector(".add-btn");

const random = (max) => {
	return Math.floor(Math.random() * (max + 1));
};

const handleAdd = (e) => {
	e.preventDefault;
	const randomIndex = random(products.length);
	const newProduct = products[randomIndex];
	console.log(newProduct);
	fetch(`/api/products/`, {
		method: "POST",
		body: JSON.stringify(newProduct),
		headers: {
			"Content-Type": "application/json",
		},
	});
};

const handleDelete = (e) => {
	e.stopPropagation();
	console.log(e.target, e.target.id);
	const productId = e.target.id;
	fetch(`/api/products/${productId}`, {
		method: "DELETE",
		headers: {
			"Content-Type": "application/json",
		},
	});
};

addBtn.addEventListener("click", handleAdd);

productItems.forEach((element) => {
	element.addEventListener("click", handleDelete);
});

socket.on("product_added", (data) => addProductElement(data.result));
socket.on("product_deleted", (data) => deleteProductElement(data.result));

const addProductElement = (product) => {
	const ulElement = document.querySelector(".product-list");
	const liElement = document.createElement("li");
	liElement.innerHTML = `<div class="list-item"><b>Id:</b>${product.id} - <b>Título:</b>	${product.title} - <b>Categoría:</b> ${product.category} - <b>Código:</b> ${product.code}</div>`;
	product.thumbnails.forEach((thumbnail) => {
		liElement.innerHTML += `<img class="thumbnail" src="${thumbnail}" />`;
	});
	liElement.id = product.id;
	ulElement.appendChild(liElement);
};

const deleteProductElement = (product) => {
	const liToRemove = document.getElementById(product.id);
	liToRemove.remove();
};

const products = [
	{
		title: "Zanahoria",
		description: "raíz comestible de la planta Daucus carota",
		price: 50,
		stock: 234,
		thumbnails: [],
		code: "ABC1234",
		category: "verdura",
	},
	{
		title: "Camote",
		description: "raíz comestible de la planta Ipomoea batatas",
		price: 60,
		stock: 432,
		thumbnails: [],
		code: "DEF5678",
		category: "verdura",
	},
	{
		title: "Cebolla Verde",
		description: "planta de la familia de los lirios",
		price: 30,
		stock: 567,
		thumbnails: [],
		code: "GHI9012",
		category: "verdura",
	},
	{
		title: "Ejote Verde",
		description: "vaina comestible de la planta Phaseolus vulgaris",
		price: 40,
		stock: 123,
		thumbnails: [],
		code: "JKL3456",
		category: "verdura",
	},
	{
		title: "Espinaca",
		description: "hoja comestible de la planta Spinacia oleracea",
		price: 20,
		stock: 345,
		thumbnails: [],
		code: "MNO7890",
		category: "verdura",
	},
	{
		title: "Nabo",
		description: "raíz comestible de la planta Brassica rapa",
		price: 35,
		stock: 678,
		thumbnails: [],
		code: "PQR1234",
		category: "verdura",
	},
	{
		title: "Puerro",
		description: "planta de la familia de los lirios",
		price: 25,
		stock: 456,
		thumbnails: [],
		code: "STU5678",
		category: "verdura",
	},
	{
		title: "Rábano",
		description: "raíz comestible de la planta Raphanus sativus",
		price: 45,
		stock: 789,
		thumbnails: [],
		code: "VWX9012",
		category: "verdura",
	},
	{
		title: "Remolacha",
		description: "raíz comestible de la planta Beta vulgaris",
		price: 55,
		stock: 321,
		thumbnails: [],
		code: "YZA3456",
		category: "verdura",
	},
	{
		title: "Calabaza",
		description: "fruto comestible de la planta Cucurbita pepo",
		price: 65,
		stock: 876,
		thumbnails: [],
		code: "BCD7890",
		category: "verdura",
	},
	{
		title: "Manzana",
		description: "fruto comestible de la planta Malus domestica",
		price: 70,
		stock: 123,
		thumbnails: [],
		code: "ABC1239",
		category: "fruta",
	},
	{
		title: "Plátano",
		description: "fruto comestible de la planta Musa",
		price: 80,
		stock: 234,
		thumbnails: [],
		code: "DEF5679",
		category: "fruta",
	},
	{
		title: "Cereza",
		description: "fruto comestible de la planta Prunus avium",
		price: 90,
		stock: 345,
		thumbnails: [],
		code: "GHI9019",
		category: "fruta",
	},
	{
		title: "Fresa",
		description: "fruto comestible de la planta Fragaria × ananassa",
		price: 100,
		stock: 456,
		thumbnails: [],
		code: "JKL3459",
		category: "fruta",
	},
	{
		title: "Kiwi",
		description: "fruto comestible de la planta Actinidia deliciosa",
		price: 110,
		stock: 567,
		thumbnails: [],
		code: "MNO7899",
		category: "fruta",
	},
	{
		title: "Mango",
		description: "fruto comestible de la planta Mangifera indica",
		price: 120,
		stock: 678,
		thumbnails: [],
		code: "PQR1239",
		category: "fruta",
	},
	{
		title: "Naranja",
		description: "fruto comestible de la planta Citrus × sinensis",
		price: 130,
		stock: 789,
		thumbnails: [],
		code: "STU5679",
		category: "fruta",
	},
	{
		title: "Pera",
		description: "fruto comestible de la planta Pyrus communis",
		price: 140,
		stock: 890,
		thumbnails: [],
		code: "VWX9019",
		category: "fruta",
	},
	{
		title: "Piña",
		description: "fruto comestible de la planta Ananas comosus",
		price: 150,
		stock: 901,
		thumbnails: [],
		code: "YZA3459",
		category: "fruta",
	},
	{
		title: "Uva",
		description: "fruto comestible de la planta Vitis vinifera",
		price: 160,
		stock: 12,
		thumbnails: [],
		code: "BCD7899",
		category: "fruta",
	},
];
