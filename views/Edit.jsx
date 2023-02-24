const React = require('react')
const NavBar = require('./components/NavBar.jsx')

class Edit extends React.Component {
    render(){
        const {companyName, industry, jobTitle, salary, workLocation, jobSummary, educationAndExperience, jobApplicationLink, uniqueBenefits, reasonForApplying, _id} = this.props.job
        
        return(
            <div>
                <NavBar/>
                <h1>Edit a Job</h1>
                    <form action={`/jobs/${_id}/?_method=PUT`} method='POST'>
                        Company Name: <input type="text" name='companyName' defaultValue={companyName}/><br />
                        Industry: <input type="text" name='industry' defaultValue={industry} /><br />
                        Job Title: <input type="text" name='jobTitle'defaultValue={jobTitle} /><br />
                        Salary: <input type="text" name='salary' defaultValue={salary} /><br />
                        Work Location: <input type="text" name='workLocation' defaultValue={workLocation} /><br />
                        Job Summary: <input type="text" name='jobSummary' defaultValue={jobSummary} /><br />
                        Education and Experience: <input type="text" name='educationAndExperience' defaultValue={educationAndExperience} /><br />
                        If any, what unique benefits does the company offer? <input type="text" name='uniqueBenefits' defaultValue={uniqueBenefits} /><br />
                        What are your reasons for applying for this role? <input type="text" name='reasonForApplying' defaultValue={reasonForApplying} /><br /> 
                        Link to job application: <input type="text" name='jobApplicationLink' defaultValue={jobApplicationLink} /><br /> 
                        <input type="submit" value='Edit this Job'/>
                </form>
            </div>
        )
    }
}

module.exports = Edit