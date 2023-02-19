const express = require('express')
const app = express();

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/CSS',express.static(__dirname+ '/public/CSS'))
app.use('/Images', express.static(__dirname + '/public/Images'))
app.use('/', express.static(__dirname + '/public'))
app.use('/api',require('./routes/api/index').route)

app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/public/index.html')
})

app.listen(2345,()=>{
    console.log("Server started on http://localhost:2345")
})