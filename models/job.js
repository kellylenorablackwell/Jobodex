const mongoose = require('mongoose')
const Schema = mongoose.Schema

const jobSchema = new Schema({
    companyName : {type: String, required: true},
    industry: {type: String, required: true},
    jobTitle: {type: String, required: true},
    salary: String,
    workLocation: String, 
    jobSummary: String,
    educationAndExperience: String,
    uniqueBenefits: String,
    reasonForApplying: String,
    jobApplicationLink: String
}, {
    timestamps: true
})

const Job = mongoose.model('Job', jobSchema)

module.exports = Job