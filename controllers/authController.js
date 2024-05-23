const { condominoFacade } = require("../dependency/injection");
const bcrypt = require("bcrypt");

exports.singup = (req, res) =>{
    const nome = req.body.nome;
    const email = req.body.email;
    const senha = req.body.senha;
    const telefone = req.body.telefone;
    const logradouro = req.body.logradouro;
    const idCondominio = req.body.logradouro;

    bcrypt.hash(senha, 12).then((novasenha)=>{
        condominoFacade.adicionarCondomino({nome: nome,email: email,senha: novasenha,telefone: telefone,logradouro:logradouro,idCondominio:idCondominio});
    }).then((resultado)=>{
        
    })
}

exports.login = (req, res) =>{
    
}