const React = require('react')
const NavBar = require('../components/NavBar.jsx')
const Button = require('../components/Button.jsx')


class Home extends React.Component {
    render(){
        return(
            <div style={{fontFamily: 'Verdana', fontSize: '10px'}}>
                <NavBar/>
                <div >
                    <p>Jobodex is a website that’s designed to help job applicants keep track of available job opportunities in a centralized, organized and user-friendly way.</p>
                    <p> Jobodex captures and stores information about each job such as company name, industry, job title, salary, work location, job summary, required educational and/or professional experience and more.</p>
                    
                    <p>Job seekers can easily add, edit and display available job postings, as well as apply for their favorite listings direclty from the site, helping job seekers to stay organized, focused, and on top of their job search and application activities.</p>
                    
                    <p>Jobodex is the ideal tool for job seekers who want to streamline their job search to help land their dream job.</p>
                    <Button formAction='/jobs/new' value='Add a Job'/>
                </div>
            </div>
        )
    }
}

module.exports = Home