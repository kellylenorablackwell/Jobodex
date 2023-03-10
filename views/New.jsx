const React = require('react')
const NavBar = require('./components/NavBar.jsx')
const Button = require('./components/Button.jsx')

class New extends React.Component {
    render(){
        const formStyle = {
            borderStyle: 'solid',
            borderColor: 'black',
            borderWidth: '1px',
            boxShadow: '10px 10px 5px',
            borderRadius:'5px',
            height: '425px',
            width: '345px',
            margin: '35px 50px 100px 50px',
            padding: '1px 15px 30px 25px'
         };

         const inputStyle = {
            // borderStyle: 'solid',
            // borderWidth: '1px',
            // borderColor: 'black',
            // height: '400px',
            width: '325px',
            margin: '1px',
         };
        return(
            <div>
                <NavBar/>
                
                <div style={formStyle}> <h1 style={{backgroundColor: '#004aad', height: '25px', width: '335px', fontFamily: 'Verdana', fontSize: '20px'}}>Add a Job</h1>
                    <form action='/jobs' method='POST' style={{fontFamily: 'Verdana', fontSize: '10px'}}>
                        Company Name: <input style={inputStyle} type="text" name='companyName' value=''/><br />
                        Industry: <input style={inputStyle} type="text" name='industry' value='' /><br />
                        Job Title: <input style={inputStyle} type="text" name='jobTitle' value='' /><br />
                        Salary: <input style={inputStyle} type="text" name='salary' value='' /><br />
                        Work Location: <input style={inputStyle} type="text" name='workLocation' value='' /><br />
                        Job Summary: <input style={inputStyle} type="text" name='jobSummary' value='' /><br />
                        Education and Experience: <input style={inputStyle} type="text" name='educationAndExperience' value='' /><br />
                        If any, what unique benefits does the company offer? <input style={inputStyle} type="text" name='uniqueBenefits' value='' /><br />
                        What are your reasons for applying for this role? <input style={inputStyle} type="text" name='reasonForApplying' value='' /><br />
                        Link to job application: <input style={inputStyle} type="text" name='jobApplicationLink' value='' /><br />
                        <br />
                        <Button formAction='/jobs/new' value='Add'/>
                   </form>
                </div>   
            </div>
        )
    }
}

module.exports = New