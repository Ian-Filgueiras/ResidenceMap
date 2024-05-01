module.exports = (sequelize, DataTypes) => {
    const Visitante = sequelize.define(
      "visitante",
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
        idCondomino: {
            type: DataTypes.INTEGER,
          },
      },
      { freezeTableName: true, timestamps: false }
    );
  
    return Visitante;
  };