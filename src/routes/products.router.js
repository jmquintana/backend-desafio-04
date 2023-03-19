import ProductManager from "../managers/ProductManager.js";
import { Router } from "express";
import { uploader } from "../utils.js";

const router = Router();
const manager = new ProductManager();
const products = await manager.getProducts();

router.get("/", (req, res) => {
	let limit = parseInt(req.query.limit);
	let limitedProducts = limit ? products.slice(0, limit) : products;
	return res.send({ status: "Success", result: limitedProducts });
});

router.get("/:pid", async (req, res) => {
	let productId = parseInt(req.params.pid);

	const result = await manager.getProductById(productId);
	return res.send(result);
});

router.post("/", uploader.array("thumbnails", 5), async (req, res) => {
	let product = req.body;
	let files = req.files;

	if (!product) {
		return res.status(400).send({
			status: "Error",
			error: "Error, the product could no be added",
		});
	}

	product.thumbnails = [];

	if (files) {
		files.forEach((file) => {
			const imageUrl = `http://localhost:8080/${file.filename}`;
			product.thumbnails.push(imageUrl);
		});
	}

	const result = await manager.addProduct(product);

	if (result.status === "Added") {
		res.send({ status: "Success", result: "Product added" });
	} else {
		res.send(result);
	}
});

router.put("/:pid", async (req, res) => {
	const productId = parseInt(req.params.pid);
	const changes = req.body;
	const result = await manager.updateProduct(productId, changes);
	res.send(result);
});

router.delete("/:pid", async (req, res) => {
	const productId = parseInt(req.params.pid);
	const result = await manager.deleteProduct(productId);
	res.send(result);
});

export default router;
