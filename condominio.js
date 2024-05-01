module.exports = (sequelize, DataTypes) => {
    const Condominio = sequelize.define(
      "condominio",
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
        endereco: {
          type: DataTypes.STRING(255),
          allowNull: false,
        },
        numero_unidades: {
            type: DataTypes.INTEGER,
            allowNull: false,
          },
      },
      { freezeTableName: true, timestamps: false }
    );
  
    return Condominio;
  };