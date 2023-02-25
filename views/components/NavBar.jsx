const React = require('react')

class NavBar extends React.Component {
    render(){
        const ulStyle = {
          listStyle: 'none',
          display:'flex',
        //   justifyContent: 'start',
          marginTop:'1px',
          marginLeft: '1px',
          borderBottom: '1px solid lightGray',
        //   border: '1px solid purple',
          padding: '1px'
        }

        const logoStyle = {
            // border: '1px solid green',
            padding:'0px 600px 0px 0px',
        }

        const navBarStyle = {
            // border: '1px solid red',
            alignSelf:'center',
            padding:'0px 17px 0px 17px',
        }

        const aTagStyle = {
            textDecoration: 'none',
            fontFamily: 'Courier New',
            fontSize: '10px',
            color: 'black'
            
        } 
        
        return(
            <div>
                <ul style={ulStyle}>
                    <li style={logoStyle}>{<a href='/home'>{<img src="../logo.png" width='85' height='25' alt="" />}</a>}</li>
                    <li style={navBarStyle}>{<a style={aTagStyle} href='/home'>Home</a>}</li>  
                    <li style={navBarStyle}>{<a style={aTagStyle} href='/jobs/new'>Add a Job</a>}</li>  
                    <li style={navBarStyle}>{<a style={aTagStyle} href='/jobs'>Saved Jobs</a>}</li>  
                    <li style={navBarStyle}>{<a style={aTagStyle} href='/exit'>Exit</a>}</li>  
                </ul>
            </div>

        )
    }
}

module.exports = NavBar