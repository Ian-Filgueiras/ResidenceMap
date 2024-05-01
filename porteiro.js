module.exports = (sequelize, DataTypes) => {
    const Porteiro = sequelize.define(
      "porteiro",
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
        email: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        senha: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        telefone: {
            type: DataTypes.STRING(15),
            allowNull: false,
        },
        logradouro: {
          type: DataTypes.STRING(50),
          allowNull: false,
        },
        idCondominio: {
            type: DataTypes.INTEGER,
          },
      },
      { freezeTableName: true, timestamps: false }
    );
  
    return Porteiro;
  };