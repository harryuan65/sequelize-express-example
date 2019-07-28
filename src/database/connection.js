//database跟connection.js是自己建立的

const Sequelize = require('sequelize');

const sequelize = new Sequelize("members","root","123456",{
    host: '127.0.0.1',
    port: 8889,
    dialect: "mysql",
    operatorAliases: false
}); //dbname, id, pw

module.exports = sequelize;
global.sequelize = sequelize;

//sequelize migration:create --name create_tweets_table
//sequelize db:migrate
//sequelize db:migrate:undo
//sequelize db:migrate:undo:all