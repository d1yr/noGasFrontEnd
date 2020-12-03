import React from 'react';
import User from './User.js'
import Comment from './Comment.js'
import NewComment from './NewComment.js'
import EditArticle from './EditArticle.js'

class Article extends React.Component {

  state={
    isHidden3: false,
    commentSection: [...this.props.comments],
    users: this.props.users,
    isHidden1: false,
    articleCopy: this.props
  }

 
  toggleHidden3 (){
    this.setState({
      isHidden3: !this.state.isHidden3
    })
  }

  toggleHidden1 (){
    this.setState({
      isHidden1: !this.state.isHidden1
    })
  }

  returnsAUserArray(){
    const array1 = this.props.users.filter((obj) => obj.id === this.props.user_id)
    return array1.map((j) => <User key={j.name} id={j.id} name={j.name} bio={j.bio} email={j.email} avatar={j.avatar}/>)
  }

  returnsACommentArray(){
    const array2 = this.state.commentSection.filter((obj) => obj.article_id === this.props.id)
    return array2.map((j) => <Comment key={j.id} content={j.content} user_id={j.user_id} article_id={j.article_id} submitComment={this.submitCommentHandler}/>)
  }

  submitCommentHandler=(newComment, e)=>{
    console.log(newComment)
    fetch('http://localhost:3000/comments',{
    method: 'POST',
    headers:{
      "content-type": "application/json",
      accepts: "application/json"
    },
    body: JSON.stringify(newComment)})
    .then(resp => resp.json())
    this.setState({commentSection: [newComment, ...this.state.commentSection]})

  }

  editArticleHandler =(editA, e)=>{
    console.log(editA)
    const thing = editA.id
    fetch(`http://localhost:3000/articles/${thing}`, {
      method: "PATCH",
      headers:{
        "content-type": "application/json",
        accepts: "application/json"
      },
      body: JSON.stringify(editA)
    })
    .then(res => res.json())
    .then((res) => this.props.editArticle(res))
    
  }


  handleDelete=(e)=>{
    console.log(this.props.id)
    const thing = this.props.id
    e.preventDefault(thing)
    fetch(`http://localhost:3000/articles/${thing}`, {
      method: "DELETE"
    })
    .then(res => res)
    .then((res) => {
      this.props.deleteArticle(thing)}
    )
  }

  
  

  render() {
    console.log(this.props)
    return(
    <div className="article">
      <div className="article_title">
        {this.props.title}
      </div>
      <div className="article_author">
      {this.returnsAUserArray()}
      </div>
      <img src={this.props.image1}/>
      <div className="article_content">
        {this.props.content}
        <br></br>
        <img src={this.props.image2}/>
        <br></br><ul><br></br>Comments
      
      <li className="article_comment">
        {this.returnsACommentArray()}
      </li></ul><div></div>
      <button onClick={this.toggleHidden3.bind(this)}>Leave Comment</button>{this.state.isHidden3 && <NewComment commentHandler={this.submitCommentHandler} artId={this.props.id}/>}
      <button onClick={this.handleDelete}>Delete</button>
      <button onClick={this.toggleHidden1.bind(this)}>Edit Article</button>{this.state.isHidden1 && <EditArticle editArticleHandler={this.editArticleHandler} article={this.state.articleCopy}/>}
      </div>
    </div>
    
      
      )

}
}
export default Article