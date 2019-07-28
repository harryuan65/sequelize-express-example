'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("users",{
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
        },
        createdAt:Sequelize.DATE,
        updatedAt:Sequelize.DATE,
    })
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('users');
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};


//sequelize db:migration會執行migrations裡面的東西