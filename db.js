const Sequelize = require('sequelize')

const db = new Sequelize('shopdb','gagan','1234',{
    host:'localhost',
    dialect:'mysql'
})

const User = db.define('users',{//users is the name of the table
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

const Product = db.define('Products',{
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    manufacturer: Sequelize.STRING,
    price: {
        type: Sequelize.FLOAT,
        allowNull: false,
        defaultValue: 0.0
    }
})

db.sync()//used for creating db (work as a promise)
    .then(()=> {
        console.log("Database has been synced")
    })
    .catch(()=>{
        console.log("Error in creating database")
    })

exports = module.exports = {//exports as objects
    User,Product
}