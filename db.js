const sequelize = require('sequelize')

const db = new sequelize('shopdb','gagan','1234',{
    host:'localhost',
    dialect: 'mysql',
    pool:{//tells the max and min connections that can be made at a time while processing data in database(optional attribute)
        min: 0,
        max: 5,
    }
})

//creating obj

const user = db.define('users',{
    id:{
        type: sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name:{
        type: sequelize.STRING,
        allowNull: false,
    }
})

const product = db.define('products',{
    id:{
        type: sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: sequelize.STRING,
        allowNull: false
    },
    manufacturer: sequelize.STRING,
    price:{
        type: sequelize.FLOAT,
        allowNull: false,
        defaultValue: 0.0
    }
})

exports = module.exports = {
    user,product
}