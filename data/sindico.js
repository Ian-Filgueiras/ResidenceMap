module.exports = (sequelize, DataTypes) => {
    const Sindico = sequelize.define(
      "sindico",
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          allowNull: false,
          autoIncrement: true,
          unique: true,
        },
        nome: {
          type: DataTypes.STRING(150),
          allowNull: false,
        },
        email: {
            type: DataTypes.STRING(200),
            allowNull: false,
        },
        senha: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        telefone: {
            type: DataTypes.STRING(15),
            allowNull: false,
        },
        idCondominio: {
            type: DataTypes.INTEGER,
          },
      },
      { freezeTableName: true, timestamps: false }
    );
  
    return Sindico;
  };