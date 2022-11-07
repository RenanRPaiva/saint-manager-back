'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Eventos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Eventos.hasMany(models.Inscritos, {
        foreignKey: "evento_id"        
      });

      Eventos.belongsTo(models.Users, {
        foreignKey: "user_id",
        foreignKey: "coord_id",
        foreignKey: "team_id"
      });
    }
  }
  Eventos.init({
    image: DataTypes.STRING,
    name: DataTypes.STRING,
    shortdescription: DataTypes.STRING,
    depart: DataTypes.STRING,   
    date: DataTypes.DATEONLY,
    time: DataTypes.TIME,
    local: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Eventos',
  });
  return Eventos;
};