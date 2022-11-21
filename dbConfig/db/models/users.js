"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Users.hasMany(models.Eventos, {
        foreignKey: "user_id"
      });     
      Users.hasMany(models.Inscritos, {
        foreignKey: "user_id",
        scope: { status: "Inscrito" }
      });
    }
  }
  Users.init(
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      senha: DataTypes.STRING,
      tipo: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Users",
      paranoid: true,
      defaultScope:{
        where:{
          tipo: "Ativo"
        }
      },
      scopes:{
        all: {
          where:{}
        },
        Inativos:{
          where: {
            tipo: "Inativo"
          }
        },
        Adm: {
          where: {
            tipo: "Administrador"
          }
        }
      }
    }
  );
  return Users;
};
