'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Inscritos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Inscritos.belongsTo(models.Users, {
        foreignKey: "user_id"
      });
      
      Inscritos.belongsTo(models.Eventos, {
        foreignKey: "evento_id"
      });
    }
  }
  Inscritos.init({
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Inscritos',
  });
  return Inscritos;
};