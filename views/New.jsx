const React = require('react')
const NavBar = require('./components/NavBar.jsx')

class New extends React.Component {
    render(){
        const formStyle = {
            borderStyle: 'solid',
            borderColor: 'black',
            borderWidth: '1px',
            boxShadow: '10px 10px 5px',
            // borderRadius:'15px',
            height: '500px',
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
                
                <div style={formStyle}> <h1 style={{backgroundColor: '#004aad', width: '335px'}}>Add a Job</h1>
                    <form action='/jobs' method='POST'>
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
                        <input type="submit" value='Add'/> 
                   </form>
                </div>   
            </div>
        )
    }
}

module.exports = New