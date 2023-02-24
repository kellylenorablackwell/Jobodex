const React = require('react')

class NavBar extends React.Component {
    render(){
        const ulStyle = {
          listStyle: 'none',
          display:'flex',
          justifyContent: 'start',
          marginTop:'1px',
          marginLeft: '5px',
          borderBottom: '1px solid gray'
        }

        const logoStyle = {
            // border: '1px solid green',
            paddingRight:'500px'
        }

        const navBarStyle = {
            // border: '1px solid red',
            alignSelf:'center',
            padding:'1px 25px 1px 25px',
        
          
        }
  
        return(
            <div>
                <ul style={ulStyle}>
                    <li style={logoStyle}>{ <a href='/home'>{<img src="../logo.png" width='85' height='25' alt="" />}</a>}</li>
                    <li style={navBarStyle}>{<a href='/jobs/new'>Add a Job</a>}</li>  
                    <li style={navBarStyle}>{<a href='/jobs'>Saved Jobs</a>}</li>  
                    <li style={navBarStyle}>{<a href='/exit'>Exit</a>}</li>  
                </ul>
            </div>

        )
    }
}

module.exports = NavBar