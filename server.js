import app from "./src/app.js";

const PORT = 8000  // define a porta do servidor

app.listen(PORT, () => {
    console.log(`Servidor rodando em localhost:${PORT}`)
})