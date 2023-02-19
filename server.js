const express = require('express')
const app = express();

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/', express.static(__dirname + '/public'))
app.use('/api',require('./routes/api/index').route)

app.listen(2345,()=>{
    console.log("Server started on http://localhost:2345")
})