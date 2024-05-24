const { condominoFacade } = require("../dependency/injection");
const bcrypt = require("bcrypt");
const { Condomino } = require("../data/dbContext");
const jwt = require("jsonwebtoken");

exports.signup = (req, res) =>{
    const nome = req.body.nome;
    const email = req.body.email;
    const senha = req.body.senha;
    const telefone = req.body.telefone;
    const logradouro = req.body.logradouro;
    const idCondominio = req.body.idCondominio;

    bcrypt
    .hash(senha, 12)
    .then((novaSenha) => {
        condominoFacade.adicionarCondomino({nome: nome,email: email,senha: novaSenha,telefone: telefone,logradouro:logradouro,idCondominio:idCondominio});
    })
    .then((resultado) => {
      res.status(201).json({ resultado: "Condomino cadastrado com sucesso!" });
    })
    .catch((err) => {
      res.status(500);
    });
}

exports.login = (req, res, next) =>{
    const email = req.body.email;
    const senha = req.body.senha;
  
    let condominoCarregado;
  
    Condomino.findOne({ where: { email: email } })
      .then((condomino) => {
        if (!condomino) {
          res.status(401).json({ error: "O email informado não foi cadastrado" });
        }
  
        condominoCarregado = condomino;
  
        return bcrypt.compare(senha, condomino.senha);
      })
      .then((senhaDescriptografada) => {
        if (!senhaDescriptografada) {
          res.status(401).json({ error: "Usuário ou senha errado!" });
        }
  
        const token = jwt.sign(
          {
            email: condominoCarregado.email
          },
          "minha_chave_secreta",
          { expiresIn: "1h" }
        );
  
        res.status(200).json({ token: token });
      })
      .catch((err) => {
        next(err);
      });
}

