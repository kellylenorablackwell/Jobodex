const JobRouter = require('express').Router()
const Job = require('../models/job.js')


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

 JobRouter.get('/new', (req,res)=>{
    res.render('../views/New.jsx')
 })

 module.exports = JobRouter