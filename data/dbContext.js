const dbConfig = require("../config/dbConfig.js");

const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize(
  dbConfig.DB,
  dbConfig.USERNAME,
  dbConfig.PASSWORD,
  {
    host: dbConfig.HOST,
    dialect: dbConfig.DIALECT,
    port: dbConfig.PORT,
  }
);

sequelize
  .authenticate()
  .then(() => {
    console.log("Conectado com sucesso!");
  })
  .catch((erro) => {
    console.log("Erro ao tentar conectar: " + erro);
  });

const Condominio = require("./condominio")(sequelize, DataTypes);
const Porteiro = require("./porteiro")(sequelize, DataTypes);
const Sindico = require("./sindico")(sequelize, DataTypes);
const Condomino = require("./condomino")(sequelize, DataTypes);
const Comunicacao = require("./comunicacao")(sequelize, DataTypes);
const Reservas = require("./reservas")(sequelize, DataTypes);
const Visitante = require("./visitante")(sequelize, DataTypes);

sequelize
  .sync({ alter: true })
  .then(() => {
    console.log("Tabelas criadas com sucesso!");
  })
  .catch((err) => {
    console.log("Erros: " + err);
  });

  module.exports = {
    Condominio,
    Porteiro,
    Sindico,
    Condomino,
    Comunicacao,
    Reservas,
    Visitante
  };