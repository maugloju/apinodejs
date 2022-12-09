const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('apiteste', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

sequelize.authenticate().then(function(){
    console.log('sucesso')
}).catch(function(){
    console.log('erro');
}) 

module.exports = sequelize