import React from 'react';

class User extends React.Component {
    render() {
        console.log(this.props.id)
        return(
        <div>
            <div>{this.props.name}</div>
            <div>{this.props.email}</div>
        </div>
          
          )
    
    }
}

export default User;