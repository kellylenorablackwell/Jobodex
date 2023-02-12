const React = require('react')

class Show extends React.Component {
    render(){
        const {companyName, industry, jobTitle, salary, isRemote, isHybrid, uniqueBenefits, reasonForApplying, _id} = this.props.job
        return(
            <div>
                <a href='/jobs'>Return to Home Page</a>

                <h1>{companyName}</h1>
                <h5>Industry: {industry}</h5>
                <h5>Job Title:{jobTitle}</h5>
                <h5>Salary: {salary}</h5>
                <h5>Is the role remote? {isRemote}</h5>
                {/* Is this a hybrid role? <input type="checkbox" name='isHybrid' checked={isHybrid} />  */}
                <h5>If any, what unique benefits does the company offer?{uniqueBenefits}</h5>
                <h5>What are your reasons for applying to this role?{reasonForApplying}</h5>
                <a href={`/jobs/${_id}/edit`}>Edit this Job</a><br />
                <form action={`/jobs/${_id}/?_method=DELETE`} method='POST'> <br />
                    <input type="submit" value='DELETE THIS JOB' />
                </form>
               
            

                 
            </div>
        )
    }
}

module.exports = Show