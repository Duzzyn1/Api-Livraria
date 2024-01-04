import livro from "../models/Livro.js";
import { autor } from "../models/Autor.js"

class LivroController {

    static async listarLivros (req, res, next) {
        try{
            const listaLivros = await livro.find({})
            res.status(200).json(listaLivros)
        } catch(erro) {
           next(erro)
        }
    }

    static async listarLivroPorId (req, res, next) {
        try{
            const id = req.params.id
            const encontraLivro = await livro.findById(id) // acha o livro com o id desejado, por exemplo: localhost:8000/livros/6581b5f72dafa6eafe867e08
            res.status(200).json(encontraLivro)
        } catch(erro) {
           next(erro)
        }
    }

    static async cadastrarLivro (req, res, next) {
        const criaLivro = req.body; // na estrutura onde criamos um livro, temos a propriedade autor>>>>>>>>>
        try{
            const autorEncontrado = await autor.findById(criaLivro.autor) // então no corpo da requisição a gente vai pegar a propriedade AUTOR e lá passamos o ID dele
            const livroCompleto = { ...criaLivro, autor: { ...autorEncontrado } } // o spread operator, nesse caso, puxa todas as informações do criaLivro e do autorEncontrado
            // o ._doc faz recuperar todos os dados do autorEncontrado, como é um outro schema, sem o ._doc teria um retorno diferente
            const livroCriado = await livro.create(livroCompleto)
            res.status(201).json({ message: "Livro criado com sucesso.", livro: livroCriado }) // na resposta, aparece a mensagem livro criado com sucesso, e aparece
            // livro: com as informações da estrutura de um livro
        } catch(erro) {
           next(erro)
        }
    }

    static async atualizarLivro (req, res, next) {
        try {
            const id = req.params.id
            await livro.findByIdAndUpdate(id, req.body) // cada método tem seu retorno especifico, nesse caso ele não retorna um objeto criado, por isso não precisa
            // salvar em uma variavel
            res.status(200).json({ message: "Livro atualizado" })
        } catch(erro) {
           next(erro)
        }
    }

    static async deletaLivro (req, res, next) {
        try {
            const id = req.params.id;
            await livro.findByIdAndDelete(id)
            res.status(201).json({ message: "Livro deletado com sucesso" })
        } catch(erro) {
           next(erro)
        }
    }

    static async listarLivrosPorEditora(req, res, next) {
        const editora = req.query.editora;
        try{
            const livrosPorEditora = await livro.find({ editora: editora }) // o primeiro valor é uma propriedade de LIVROS que se chama editora, e o segundo valor é a variavel
            // que reberá o valor passado na query
            res.status(200).json(livrosPorEditora)
        } catch(erro) {
           next(erro)
        }
    }

};

export default LivroController;