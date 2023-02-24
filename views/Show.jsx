const React = require('react')
const NavBar = require('./components/NavBar.jsx')

class Show extends React.Component {
    render(){
        const {companyName, industry, jobTitle, salary, workLocation, jobSummary, educationAndExperience, uniqueBenefits, reasonForApplying, jobApplicationLink, _id} = this.props.job
        return(
            <div>
                <NavBar/>
                <h1>{companyName}</h1>
                <h5>Industry: {industry}</h5>
                <h5>Job Title: {jobTitle}</h5>
                <h5>Salary: {salary}</h5>
                <h5>Work Location: {workLocation}</h5>
                <h5>Job Summary: {jobSummary}</h5>
                <h5>Education and Experience: {educationAndExperience}</h5>
                <h5>If any, what unique benefits does the company offer?{uniqueBenefits}</h5>
                <h5>What are your reasons for applying for this role?{reasonForApplying}</h5>
                <form action={jobApplicationLink}>
                    <input type="submit" value='Apply' />
                </form>
                <form action={`/jobs/${_id}/edit`}>
                    <input type="submit" value='Edit' />
                </form>
                <form action={`/jobs/${_id}/?_method=DELETE`} method='POST'>
                    <input type="submit" value='Delete' />
                </form>
            </div>
        )
    }
}

module.exports = Show