const JobRouter = require('express').Router()
const { trusted } = require('mongoose')
const Job = require('../models/job.js')

//Index/////////////////////////////
JobRouter.get('/',(req, res)=>{
    Job.find({},(error, allJobs)=>{
        if(error){
            res.status(500).send({
                error:error.message
            })
        } else {
            res.render('../views/Index.jsx', {
                allJobs:allJobs})
        }

    })
 })

 //New///////////////////////////////
 JobRouter.get('/new', (req,res)=>{
    res.render('../views/New.jsx')
 })

//Delete////////////////////////////
JobRouter.delete('/:id', (req,res)=>{
    Job.findByIdAndDelete(req.params.id, (error,deletedJob)=>{
        if (error) {
            res.status(500).send({
                error:error.message
            })
        } else {
            console.log(deletedJob)
            res.redirect('/jobs')
        }
    })
})

//Update////////////////////////////


//Create///////////////////////////
JobRouter.post('/', (req,res)=>{
    if (req.body.isRemote === 'on') {
        req.body.isRemote = true
    } else req.body.isRemote = false

    if (req.body.isHybrid === 'on') {
        req.body.isHybrid = true
    } else req.body.isHybrid = false

    Job.create(req.body, (error, createdJob)=>{
        if (error) {
            res.status(500).send({
                error:error.message
            })
        } else {
            res.redirect('/jobs')
        }
    })
})


//Edit////////////////////////////
// Job.Router.get('/:id/edit',(req, res)=>{
//     Job.findByIdAndUpdate()

// })




//Show////////////////////////////


 module.exports = JobRouter