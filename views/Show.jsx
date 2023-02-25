const React = require('react')
const NavBar = require('./components/NavBar.jsx')
const Button = require('./components/Button.jsx')

class Show extends React.Component {
    render(){
        const {companyName, industry, jobTitle, salary, workLocation, jobSummary, educationAndExperience, uniqueBenefits, reasonForApplying, jobApplicationLink, _id} = this.props.job

        const allFormsStyle = {
            // border: '1px solid black',
            display:'flex',
        }

        const buttonStyle = {
            backgroundColor: '#004aad', 
            color: 'white', 
            fontFamily: 'Verdana',  
            fontSize: '10px', 
            borderStyle:'none',
            borderRadius: '2px', 
            width: '75px', 
            height:'20px',
        }

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
                <div style={allFormsStyle}>
                    <form action={jobApplicationLink} style={{paddingRight:'5px'}}>
                        <input type="submit" value='Apply' style={buttonStyle}/>
                    </form>
                    <form action={`/jobs/${_id}/edit`} style={{paddingRight:'5px'}}>
                        <input type="submit" value='Edit' style={buttonStyle}/>
                    </form>
                    <form action={`/jobs/${_id}/?_method=DELETE`} method='POST' style={{paddingRight:'5px'}}>
                        <input type="submit" value='Delete' style={buttonStyle}/>
                    </form> 
                </div>
            </div>
        )
    }
}

module.exports = Show