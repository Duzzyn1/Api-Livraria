import { autor } from "../models/Autor.js";

class AutorController {

    static async listarAutores (req, res) {
        try{
            const listaAutores = await autor.find({})
            res.status(200).json(listaAutores)
        } catch(erro) {
            res.status(500).json({ message: `Houve um erro na requisição: ${erro}` })
        }
    }
  
    static async listarAutorPorId (req, res) {
        try{
            const id = req.params.id
            const encontraAutor = await autor.findById(id) // acha o autor com o id desejado, por exemplo: localhost:8000/autors/6581b5f72dafa6eafe867e08
            res.status(200).json(encontraAutor)
        } catch(erro) {
            res.status(500).json({ message: `${erro.message} - falha na requisição do autor` })
        }
    }

    static async cadastrarAutor (req, res) {
        try{
            const criaAutor = await autor.create(req.body)
            res.status(201).json({ message: "autor criado com sucesso.", autor: criaAutor }) // na resposta, aparece a mensagem autor criado com sucesso, e aparece
            // autor: com as informações da estrutura de um autor
        } catch(erro) {
            res.status(500).json({ message: `${erro.message} - falha ao cadastrar autor` })
        }
    }

    static async atualizarAutor (req, res) {
        try {
            const id = req.params.id
            await autor.findByIdAndUpdate(id, req.body) // cada método tem seu retorno especifico, nesse caso ele não retorna um objeto criado, por isso não precisa
            // salvar em uma variavel
            res.status(200).json({ message: "autor atualizado" })
        } catch(erro) {
            res.status(500).json({ message: `${erro.message} - falha ao atualizar autor` })
        }
    }

    static async deletaAutor (req, res) {
        try {
            const id = req.params.id;
            await autor.findByIdAndDelete(id)
            res.status(201).json({ message: "autor deletado com sucesso" })
        } catch(erro) {
            res.status(500).json({ message: `${erro.message} - falha ao deletar autor` })
        }
    }


}

export default AutorController;