import mongoose from "mongoose";
import { autorSchema } from "./Autor.js"

const livroSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    titulo: { type: String, required: true },
    editora: { type: String },
    preco: { type: Number },
    paginas: { type: Number },
    autor: autorSchema
}, { versionKey: false })

const livro = mongoose.model('livros', livroSchema) // primeiro parametro é a coleção lá no Banco de dados, o segundo parametro é o modelo/schema as propriedades do livro.
// o model q vai fornecer pra nossa api, os metodos que fazemos o crud, então é com o model que nos fazemos o get, post, update, delete...

export default livro;