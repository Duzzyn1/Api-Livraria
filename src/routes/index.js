import express from "express";
import livros from "./livrosRoutes.js";
import autores from "./autoresRoutes.js"

const routes = (app) => { // app é a função do express: const app = express()
    app.route("/").get((req, res) => res.status(200).send("Curso de node.js"))

    app.use(express.json(), livros, autores)
};

export default routes;