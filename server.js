require('dotenv').config()

//DEPENDENCIES
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const methodOverride = require('method-override')


//PORT
const PORT = process.env.PORT || 3000


//MODEL
const Job = require('./models/job.js')


//MIDDLEWARE
app.use(express.urlencoded({extended: false}))
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
app.use(methodOverride('_method'))
app.use(express.static('public'))


// //Static Pages
app.get('/home', (req, res)=>{
  res.render('../views/static/Home.jsx')
})

app.get('/exit', (req, res)=>{
  res.render('../views/static/Exit.jsx')

})


//DATABASE
mongoose.set('strictQuery', false)
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once('open', () => {
  console.log('The connection to Mongo was successful.');
});



//CONTROLLER
app.use('/jobs', require('./controllers/jobController.js'))



// Job.create({
//     companyName : "Cool Company",
//     industry: "Cool industry",
//     jobTitle: "Cool job title",
//     salary: 115000,
//     isRemote: true,
//     isHybrid: false, 
//     uniquebenefits: "Lots of cool benefits",
//     reasonForApplying: "Dream job"
// })

app.listen(PORT,()=>{
    console.log('I am listening.')
})


