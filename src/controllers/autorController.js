import { autor } from "../models/Autor.js";

class AutorController {

    static async listarAutores (req, res, next) {
        try{
            const listaAutores = await autor.find({})
            res.status(200).json(listaAutores)
        } catch(erro) {
            next(erro)
        }
    }
  
    static async listarAutorPorId (req, res, next) {
        try{
            const id = req.params.id
            const encontraAutor = await autor.findById(id) // acha o autor com o id desejado, por exemplo: localhost:8000/autors/6581b5f72dafa6eafe867e08

            if(encontraAutor !== null) {
                res.status(200).json(encontraAutor)
            } else {
                res.status(404).json({message: "Id do Autor não localizado."})
            }
        } catch(erro) {
            next(erro)
        }
    }

    static async cadastrarAutor (req, res, next) {
        try{
            const criaAutor = await autor.create(req.body)
            res.status(201).json({ message: "autor criado com sucesso.", autor: criaAutor }) // na resposta, aparece a mensagem autor criado com sucesso, e aparece
            // autor: com as informações da estrutura de um autor
        } catch(erro) {
            next(erro)
        }
    }

    static async atualizarAutor (req, res, next) {
        try {
            const id = req.params.id
            await autor.findByIdAndUpdate(id, req.body) // cada método tem seu retorno especifico, nesse caso ele não retorna um objeto criado, por isso não precisa
            // salvar em uma variavel
            res.status(200).json({ message: "autor atualizado" })
        } catch(erro) {
            next(erro)
        }
    }

    static async deletaAutor (req, res, next) {
        try {
            const id = req.params.id;
            await autor.findByIdAndDelete(id)
            res.status(201).json({ message: "autor deletado com sucesso" })
        } catch(erro) {
            next(erro)
        }
    }


}

export default AutorController;