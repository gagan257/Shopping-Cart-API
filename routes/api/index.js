const route = require('express').Router()

route.use('/users',require('./users'))
route.use('/products',require('./products'))

module.exports = route