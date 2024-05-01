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
        text: {
          type: DataTypes.TEXT,
          allowNull: false,
        },
        data_envio: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        idPorteiro: {
          type: DataTypes.INTEGER,
        },
        idCondomino: {
          type: DataTypes.INTEGER,
        },
        mensagem_p_para_c: {
          type: DataTypes.BOOLEAN,
        },
      },
      { freezeTableName: true, timestamps: false }
    );
  
    return Comunicacao;
  };