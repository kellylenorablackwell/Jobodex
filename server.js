require('dotenv').config()

//DEPENDENCIES
const express = require('express')
const app = express()
const mongoose = require('mongoose')
// const methodOverride = ('method-override')

//PORT
const PORT = process.env.PORT || 3000

//MODEL
const Job = require('./models/job.js')

//MIDDLEWARE
app.use(express.static('public'))
app.use(express.urlencoded({extended: false}))
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
//app.use(methodOverride('_method'))

//DATABASE
mongoose.set('strictQuery', false)
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once('open', () => {
  console.log('The connection to Mongo was successful.');
});

app.listen(PORT,()=>{
    console.log('I am listening.')
})


