module.exports = (sequelize, DataTypes) => {
    const Comunicacao = sequelize.define(
      "comunicacao",
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          allowNull: false,
          autoIncrement: true,
          unique: true,
        },
        nome: {
          type: DataTypes.STRING(100),
          allowNull: false,
        },
        cpf: {
            type: DataTypes.STRING(20),
            allowNull: false,
        },
        data_visita: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        logradouro: {
          type: DataTypes.STRING(50),
          allowNull: false,
        },
        idCondomino: {
            type: DataTypes.INTEGER,
          },
      },
      { freezeTableName: true, timestamps: false }
    );
  
    return Comunicacao;
  };