const React = require('react')

class Button extends React.Component {
    render(props){
        const buttonStyle = {
            backgroundColor: '#004aad', 
            color: 'white', 
            fontFamily: 'Verdana',  
            fontSize: '10px', 
            borderStyle:'none',
            borderRadius: '2px', 
            width: '75px', 
            height:'20px'
        }
        
        return(
            <div>
                <form action={this.props.formAction}>
                    <input type="submit" value={this.props.value} style={buttonStyle}/>
                </form>
            </div>

        )
    }
}

module.exports = Button