const { Sequelize } = require('sequelize');
const sequelize = require('sequelize');
const { mountpath } = require('../app');
const db = require('../db');

const User = db.define('users', {
    id:{
        type:Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name:{
        type:Sequelize.STRING,
        allowNull: false
    },
    email:{
        type:Sequelize.STRING,
        allowNull: false
    }    
})

//User.sync();
//User.sync({alter: true});
module.exports = User