const mysql = require('mysql');

// Configurações de conexão
const connection = mysql.createConnection({
  host: 'localhost', // Endereço do servidor
  user: 'root', // Nome de usuário
  password: 'root', // Senha
  database: 'residencemap' // Nome do banco de dados
});

module.exports = connection;
