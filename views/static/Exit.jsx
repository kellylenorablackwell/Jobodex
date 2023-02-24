const React = require('react')
const NavBar = require('../components/NavBar.jsx')

class Exit extends React.Component {
    render(){
        return(
            <div>
                <NavBar/>
                <h1>Thank you for using Jobodex! Happy hunting!</h1>
            </div>
        )
    }
}

module.exports = Exit