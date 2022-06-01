'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class dairy extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  dairy.init({
    userid: DataTypes.STRING,
    description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'dairy',
  });
  return dairy;
};