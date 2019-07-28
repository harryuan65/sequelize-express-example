const Sequelize = require('sequelize');

module.exports = sequelize.define("User",{ // schema
  id: {
    type: Sequelize.INTEGER(11),
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
    username: {
        type:Sequelize.STRING(35),
        unique: true,
        allowNull:false,
    },
    password:{
        type:Sequelize.STRING(35),
        allowNull:false,
    }
});