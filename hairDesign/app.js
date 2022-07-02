const express = require('express')
const app = express()
const { engine } = require('express-handlebars')
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const port = 5000


mongoose.connect("mongodb+srv://menes0614:M.enes0614@hairdesigndb.hjybg.mongodb.net/hairstudio?retryWrites=true&w=majority");

app.use(express.static('public'))

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

const main = require('./routes/main')
const users = require('./routes/users')

app.use('/', main)
app.use('/users', users)



app.listen(port, ()=>{
    console.log(`Server Çalışıyor, http://localhost:${port}/`)
})
