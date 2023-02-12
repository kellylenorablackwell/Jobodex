const React = require('react')

class New extends React.Component {
    render(){
        return(
            <div>
                <a href='/jobs'>See All Jobs</a>
                <h1>Add a Job</h1>
                    <form action='/jobs' method='POST'>
                        Company Name: <input type="text" name='companyName' value='' /><br />
                        Industry: <input type="text" name='industry' value='' /><br />
                        Job Title: <input type="text" name='jobTitle' value='' /><br />
                        Salary: <input type="text" name='salary' value='' /><br />
                        Work Location: <input type="text" name='workLocation' value='' /><br />
                        Job Summary: <input type="text" name='jobSummary' value='' /><br />
                        Education and Experience: <input type="text" name='educationAndExperience' value='' /><br />
                        If any, what unique benefits does the company offer? <input type="text" name='uniqueBenefits' value='' /><br />
                        What are your reasons for applying for this role? <input type="text" name='reasonForApplying' value='' /><br />
                        Link to job application: <input type="text" name='jobApplicationLink' value='' /><br />
                        <input type="submit" value='Add'/> 
                </form>
            </div>
        )
    }
}

module.exports = New