module.exports = (sequelize, DataTypes) => {
    const Reservas = sequelize.define(
      "reservas",
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          allowNull: false,
          autoIncrement: true,
          unique: true,
        },
        data_inicio: {
          type: DataTypes.DATE,
          allowNull: false,
        },
        data_fim: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        descricao: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        idCondomino: {
          type: DataTypes.INTEGER,
        },
      },
      { freezeTableName: true, timestamps: false }
    );
  
    return Reservas;
  };