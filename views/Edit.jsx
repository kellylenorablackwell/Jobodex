const React = require('react')

class Edit extends React.Component {
    render(){
        const {companyName, industry, jobTitle, salary, isRemote, isHybrid, uniqueBenefits, reasonForApplying, _id} = this.props.job
        return(
            <div>
                <a href='/jobs'>Return to Home Page</a>
                <h1>Edit a Job</h1>
                    <form action={`/jobs/${_id}/?_method=PUT`} method='POST'>
                        Company Name: <input type="text" name='companyName' defaultValue={companyName}/><br />
                        Industry: <input type="text" name='industry' defaultValue={industry} /><br />
                        Job Title: <input type="text" name='jobTitle'defaultValue={jobTitle} /><br />
                        Salary: <input type="text" name='salary' defaultValue={salary} /><br />
                        Is the role remote? <input type="checkbox" name='isRemote' checked={isRemote} /><br /> 
                        {/* Is this a hybrid role? <input type="checkbox" name='isHybrid' checked={isHybrid} /><br />  */}
                        If any, what unique benefits does the company offer? <input type="text" name='uniqueBenefits' defaultValue={uniqueBenefits} /><br />
                        What are your reasons for applying to this role? <input type="text" name='reasonForApplying' defaultValue={reasonForApplying} /><br />
                        <input type="submit" value='Edit this Job'/>
                </form>
            </div>
        )
    }
}

module.exports = Edit