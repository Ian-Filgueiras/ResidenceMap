const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  const authHeader = req.get("Authorization");

  if (!authHeader) {
    const error = new Error("Não está autenticado");
    error.statusCode = 401;
    throw error;
  }

  const token = authHeader.split(" ")[1];
  let tokenDecodificado;

  try {
    tokenDecodificado = jwt.verify(token, "minha_chave_secreta");
  } catch (err) {
    err.statusCode = 500;
    throw err;
  }

  if (!tokenDecodificado) {
    const error = new Error("Não está autenticado");
    error.statusCode = 401;
    throw error;
  }

  req.id_usuario = tokenDecodificado.id_usuario;

  next();
};
