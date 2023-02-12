const React = require('react')

class Home extends React.Component {
    render(){
        return(
            <div>
                <h1>Jobodex</h1>
                
                <p>Jobodex is a web-based platform that’s designed to help job applicants keep track of available job opportunities in a centralized, organized and user-friendly way.</p>
                <p> Jobodex captures and stores information about each available job, such as company name, job title, industry, salary, job location, company benefits and more.</p>
                
                <p>Job seekers can easily add, edit and display their favorite jobs, as well as search and filter job listings by location, job title, company, and other relevant criteria, helping job seekers to stay organized, focused, and on top of their job search activities.</p>
                
                <p>Jobodex is the ideal tool for job seekers who want to simplify their job search to help land their dream job.</p>
                    <form action='/jobs/new' >
                        <input type="submit" value='Enter'/>
                    </form>
            </div>
        )
    }
}

module.exports = Home