const React = require('react')

class New extends React.Component {
    render(){
        return(
            <div>
                <h1>Add a Job</h1>
                    <form action='/jobs' method='POST'>
                        Company Name: <input type="text" name='companyName' value='' /><br />
                        Industry: <input type="text" name='industry' value='' /><br />
                        Job Title: <input type="text" name='jobTitle' value='' /><br />
                        Salary: <input type="text" name='salary' value='' /><br />
                        Is the role remote? <input type="checkbox" name='isRemote' value='' /><br />
                        Is this a hybrid role? <input type="checkbox" name='isHybrid' value='' /><br />
                        If any, what unique benefits does the company offer? <input type="text" name='uniqueBenefits' value='' /><br />
                        What are your reasons for applying to this role? <input type="text" name='reasonForApplying' value='' /><br />
                        <input type="submit" value='Add a Job'/>
                </form>
            </div>
        )
    }
}

module.exports = New