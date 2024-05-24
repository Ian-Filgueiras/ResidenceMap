const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  const authHeader = req.get("Authorization");

  if (!authHeader) {
    res.status(401).json({ error: "Não está autenticado" })
  }

  const token = authHeader.split(" ")[1];
  let tokenDecodificado;

  try {
    tokenDecodificado = jwt.verify(token, "minha_chave_secreta");
  } catch (err) {
    res.status(500).json({ err })
    throw err;
  }

  if (!tokenDecodificado) {
    const error = new Error();
    res.status(401).json({ error: "Não está autenticado" })
    throw error;
  }

  req.id = tokenDecodificado.id;

  next();
};
