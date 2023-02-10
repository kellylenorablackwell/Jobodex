const React = require('react')

class Index extends React.Component {
    render(){
        return(
            <>
                <ul>
                    {this.props.allJobs.map((job)=>{
                        return (
                            <li key={job._id}>
                                <a href={`/jobs/${job._id}`}>{job.companyName}</a>
                                <h1>Company Name: {job.companyName}</h1>
                                <h5>Industry: {job.industry}</h5>
                                <h5>Job Title: {job.jobTitle}</h5>
                                <h5>Salary: {job.salary}</h5>
                                <h5>Remote: {job.isRemote? 'Yes' : 'No'}</h5>
                                {/* <h5>Hybrid: {job.isHydrid? 'Yes' : 'No'}</h5> */}
                                <h5>Unique company benefits: {job.uniqueBenefits}</h5>
                                <h5>Reason for applying: {job.reasonForApplying}</h5>
                                <a href={`/jobs/${job._id}/edit`}>Edit this Job</a>
                                <form action={`/jobs/${job._id}/?_method=DELETE`} method='POST'> <br />
                                    <input type="submit" value='DELETE THIS JOB' />
                                </form>
                            </li>
                        )
                    })}
                </ul>
            </>
        )
    }
}

module.exports = Index