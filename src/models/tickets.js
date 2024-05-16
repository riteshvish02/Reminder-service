'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tickets extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Tickets.init({
    subject: {
      type:DataTypes.STRING,
      allowNull:false
    },
    content:  {
      type:DataTypes.STRING,
      allowNull:false
    },
    recepient: {
      type:DataTypes.STRING,
      allowNull:false,
      validate:{
        isEmail: true,
      }
    },
    status:  {
      type:DataTypes.ENUM,
      values:["pending","success","failed"],
      defaultValue:"pending",
      allowNull:false
    }
  }, {
    sequelize,
    modelName: 'Tickets',
  });
  return Tickets;
};