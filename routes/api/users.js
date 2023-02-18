const User = require('../../db').User//taking user obj from db.js file
const route = require('express').Router()
route.get('/',(req,res)=>{
    User.findAll()//findAll is a keyword that use to find in user
        .then((users)=>{
            res.status(200).send(users)//.status is just use to give code to error or work(by our self)
        })
        .catch((err)=>{
            res.status(500).send({
                error: "Could not retrive users"
            })
        })
})

route.post('/',(req,res)=>{
    User.create({
        name: req.body.name
    }).then((user)=>{
        res.status(201).send(user)
    }).catch((err)=>{
        res.status(501).send({
            error: "could not add new user"
        })
    })
})

module.exports = route//exporting as function(route)