import React from 'react';



class Comment extends React.Component {

    state={
        isHidden: true,
        user_id: 1,
        article_id: this.props.id
    }

    

    toggleComment (){
        this.setState({
            isHidden: !this.state.isHidden
          })
    }
    render() {
        console.log(this.props)
        return(
        <div>
            <div><br></br></div>
            
            {this.props.content}
            <div><br></br></div>
        </div>
          
          )
    
    }
}

export default Comment;