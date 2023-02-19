const Product = require('../../db').Product
const route = require('express').Router()

route.get('/',(req,res)=>{
    //Get all products
    Product.findAll()
        .then((products)=>{
            res.status(200).send(products)
        })
        .catch((err)=>{
            res.status(500).send({
                error: "Could not get products"
            })
        })
})

route.post('/',(req,res)=>{
    //Validate the values
    if(isNaN(req.body.price)){
        return res.status(403).send({
            error: "Price is not a valid number"
        })
        //   ***EXAMPLE***
        //> let x = "10.4"
        // undefined
        // > parseFloat(x)
        // 10.4
        // > let y = "RS 10.4"
        // undefined
        // > parseFloat(y)
        // NaN
        // > NaN==NaN
        // false
        // > isNaN(NaN)
        // true
        // > isNaN(parseFloat(y))
        // true
    }
    
    //Add a new product
    Product.create({
        name: req.body.name,
        manufacturer: req.body.manufacturer,
        price: parseFloat(req.body.price)
        //req.body.price will give price in form of string so parseFloat is used to convert it into float
    }).then((product)=>{
        res.status(201).send(product)
    }).catch((error)=>{
        res.status(501).send({
            error: "Error in adding product"
        })
    })
})

module.exports = route