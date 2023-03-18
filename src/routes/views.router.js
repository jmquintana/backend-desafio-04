import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
	res.render("index", { nombre: "Jose", apellido: "Quintana" });
});

export default router;
