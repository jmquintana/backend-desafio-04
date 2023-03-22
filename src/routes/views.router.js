import { Router } from "express";
import ProductManager from "../managers/ProductManager.js";

const productManager = new ProductManager();
const router = Router();
const products = await productManager.getProducts();

router.get("/", (req, res) => {
	res.render("home", { products });
});

router.get("/realtimeproducts", async (req, res) => {
	const products = await productManager.getProducts();
	res.render("realTimeProducts", { products });
});

export default router;
