const jobRouter = require('express').Router
const Job = require('../models/jobs.js')


jobRouter.get('/',(req, res)=>{
    res.send("Howdy!")
 })

 module.exports = router