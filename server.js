const express = require('express')
const app = express();

app.use('/',express.static(__dirname + '/public'))
app.use('/api',require('./routes/api').route)

app.listen(2222,() =>{
    console.log('Server started at http://localhost:2222')
})