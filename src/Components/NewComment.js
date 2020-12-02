import React, { Component } from 'react';

class NewComment extends React.Component {

    state={
        content: "",
        user_id: 1,
        article_id: this.props.artId

    }
    
    changehandler= (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    submitHandler=(e)=>{
        e.preventDefault()
        this.props.commentHandler(this.state)
        console.log(this.state)
        //this.props.submitArticleHandler(this.state)
    }


    render(){
        return(
        <div>
        <form className="NewComment" onSubmit={this.submitHandler}>
            <label htmlFor="name">Enter Comment:</label>
            <input type='text' name='content' id='content' value={this.state.content} onChange={this.changehandler}/>
            <input type="submit" value="Submit"/>
        </form>
        </div>)
    }
}

export default NewComment;