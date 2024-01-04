import express from "express";
import conectaNaDatabase from "./database/dbConnect.js";
import routes from "./routes/index.js";

const conexao = await conectaNaDatabase();

conexao.on("error", (erro) => {
    console.error("Erro de conexão:", erro)
})

conexao.on("open", () => {
    console.log("Conexão com o banco feita com sucesso!")
})

const app = express(); // inicializa um servidor do tipo http
routes(app)

export default app;