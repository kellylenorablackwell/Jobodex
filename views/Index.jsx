const React = require('react')

class Index extends React.Component {
    render(){
        return(
            <>
            <h1>All Jobs</h1>
                <ul>
                    {this.props.allJobs.map((job)=>{
                        return (
                            <li key={job._id}>
                                <a href={`/jobs/${job._id}`}>{job.companyName}</a><br />
                                {/* <h1>Company Name: {job.companyName}</h1>
                                <h5>Industry: {job.industry}</h5>
                                <h5>Job Title: {job.jobTitle}</h5>
                                <h5>Salary: {job.salary}</h5>
                                <h5>Remote: {job.isRemote? 'Yes' : 'No'}</h5>
                                {/* <h5>Hybrid: {job.isHydrid? 'Yes' : 'No'}</h5> */}
                                {/*<h5>Unique company benefits: {job.uniqueBenefits}</h5>
                                <h5>Reason for applying: {job.reasonForApplying}</h5> */}
                            </li>
                            
                        )
                    })}
                </ul>
                <form action="/jobs/new">
                    <input type="submit" value='Add a Job'/>
                </form>
                <form action="/exit">
                    <input type="submit" value='Exit Jobodex'/>
                </form>
            </>
        )
    }
}

module.exports = Index