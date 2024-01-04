import mongoose from "mongoose";

function manipuladorDeErros (erro, req, res, next) {
    if(erro instanceof mongoose.Error.CastError) {
        res.status(400).send({message: "Um ou mais dados fornecidos estão incorretos"})
    } else if (erro instanceof mongoose.Error.ValidationError) {
        const mensagensErro = Object.values(erro.errors) // vai retornar um array de strings de mensagens de erro
        .map(erro => erro.message)
        .join("; "); // ao erro ser exibido, ele é separado desse jeito; com ponto virgula e espaço

        res.status(400).send({message: `Os seguintes erros foram encontrados: ${mensagensErro}`})
    } else {
        res.status(500).send({message: "Erro interno do servidor."})
    }
}

export default manipuladorDeErros;