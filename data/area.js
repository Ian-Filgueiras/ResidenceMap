module.exports = (sequelize, DataTypes) => {
    const Area = sequelize.define(
      "area",
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          allowNull: false,
          autoIncrement: true,
          unique: true,
        },
        descricao: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
      },
      { freezeTableName: true, timestamps: false }
    );
  
    return Area;
  };