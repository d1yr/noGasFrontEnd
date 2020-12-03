import React, { Component } from 'react';

class EditArticle extends React.Component {
    state={
        title: this.props.title,
        content:  this.props.content,
        image1: this.props.image1,
        image2: this.props.image2,
        user_id: 1,
        id: this.props.article.id
    }


    changehandler= (e) => {
        this.setState({ [e.target.name]: e.target.value})
    }

    //
    // id: this.setId() this logic is set up for me now
    //

    

    setId=(e)=>{
        e.preventDefault()
        console.log(this.state)

        this.props.editArticleHandler(this.state)
        
    }

    render(){
        return(
        <div><h3>Submissions?</h3>
        <form className="NewArt" onSubmit={this.setId}>
            <label htmlFor="title">Title:</label>
            <input type='text' name='title'  value={this.state.title} onChange={this.changehandler}/>
            <br></br>
            <label htmlFor="content">Write your article:</label>
            <input type='text' name='content'  value={this.state.content} onChange={this.changehandler}/>
            <br></br>
            <label htmlFor="image1">Add an image:</label>
            <input type='url' name='image1'  value={this.state.image1} onChange={this.changehandler}/>
            <br></br>
            <label htmlFor="image2">Add an image:</label>
            <input type='url' name='image2'  value={this.state.image2} onChange={this.changehandler}/>
            <br></br>
            <input type="submit" value="Edit Article!" />

            
        </form>
        </div>)
    }
}

export default EditArticle;