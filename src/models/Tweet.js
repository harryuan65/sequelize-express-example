const Sequelize = require('sequelize');

module.exports = sequelize.define("Tweet",{ // schema
  id: {
    type: Sequelize.INTEGER(11),
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
    content: Sequelize.STRING(300),
    userId:Sequelize.INTEGER(11),
    createdAt:Sequelize.DATE,
    updatedAt:Sequelize.DATE,
});