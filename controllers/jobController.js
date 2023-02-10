const JobRouter = require('express').Router()
const mongoose = require('mongoose')
const Job = require('../models/job.js')

////////////////////////////////////
//Index////////////////////////////
///////////////////////////////////

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

////////////////////////////////////
//New/////////////////////////////
///////////////////////////////////

 JobRouter.get('/new', (req, res)=>{
    res.render('../views/New.jsx')
 })

////////////////////////////////////
//Destroy/////////////////////////////
///////////////////////////////////

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

/////////////////////////////////////
//Update////////////////////////////
///////////////////////////////////

JobRouter.put('/:id', (req, res)=>{
    if (req.body.isRemote === 'on') {
        req.body.isRemote = true
    } else req.body.isRemote = false

    if (req.body.isHybrid === 'on') {
        req.body.isHybrid = true
    } else req.body.isHybrid = false

    Job.findByIdAndUpdate(req.params.id, req.body, (error, updatedJob)=>{
        if (error) {
            res.status(500).send({
                error:error.message
            })
        } else {
            res.redirect('/jobs')
        }
    })
    
})


////////////////////////////////////
//Create////////////////////////////
///////////////////////////////////

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


////////////////////////////////////
//Edit/////////////////////////////
///////////////////////////////////

JobRouter.get('/:id/edit', (req, res)=>{
    Job.findById(req.params.id, (error, editedJob)=>{
        if (error){
            res.status(500).send({
                error:error.message
            })
        } else {
            res.render('../views/Edit.jsx', {
                job:editedJob
            })
        }
    })
})

 

/////////////////////////////////////
//Show////////////////////////////
///////////////////////////////////

JobRouter.get('/:id', (req, res)=>{
    Job.findById(req.params.id, (error, foundJob)=>{
        if (error) {
            res.status(500).send({
                error:error.message
            })
        } else {
            res.render('../views/Show.jsx', {
                job:foundJob
            })
        }
    })
})

 module.exports = JobRouter