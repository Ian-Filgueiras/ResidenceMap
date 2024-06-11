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
        idArea: {
          type: DataTypes.INTEGER,
        },
        idCondomino: {
          type: DataTypes.INTEGER,
        },
      },
      { freezeTableName: true, timestamps: false }
    );
  
    return Reservas;
  };