import express from "express";
import __dirname from "./utils.js";
import handlebars from "express-handlebars";
import viewsRouter from "./routes/views.router.js";
import productsRouter from "./routes/products.router.js";
import cartsRouter from "./routes/carts.router.js";
import socket from "./socket.js";

const app = express();

const httpServer = app.listen(8080, () => {
	console.log("Servidor arriba en el puerto 8080");
});

app.engine("handlebars", handlebars.engine());
app.set("views", `${__dirname}/views`);
app.set("view engine", "handlebars");
app.use(express.static(`${__dirname}/public`));
app.use("/", viewsRouter);

app.use(express.json());
app.use("/api/products", productsRouter);
app.use("/api/carts", cartsRouter);

socket.connect(httpServer);
