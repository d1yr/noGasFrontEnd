import React from 'react';
import User from './User.js'
import Comment from './Comment.js'
import NewComment from './NewComment.js'

class Article extends React.Component {

  state={
    isHidden3: false,
    commentSection: [...this.props.comments],
    users: this.props.users
  }

 
  toggleHidden3 (){
    this.setState({
      isHidden3: !this.state.isHidden3
    })
  }

  returnsAUserArray(){
    const array1 = this.props.users.filter((obj) => obj.id === this.props.user_id)
    return array1.map((j) => <User key={j.name} id={j.id} name={j.name} bio={j.bio} email={j.email} avatar={j.avatar}/>)
  }

  returnsACommentArray(){
    const array2 = this.state.commentSection.filter((obj) => obj.article_id === this.props.id)
    return array2.map((j) => <Comment key={j.id} content={j.content} user_id={j.user_id} article_id={j.article_id}/>)
  }

  submitCommentHandler=(newComment, e)=>{
    console.log(newComment)

    this.setState({ commentSection: [newComment, ...this.state.commentSection] })
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
        <br></br><ul><br></br>Comments
      
      <li className="article_comment">
        {this.returnsACommentArray()}
      </li></ul><div></div>
      <button onClick={this.toggleHidden3.bind(this)}>Leave Comment</button>{this.state.isHidden3 && <NewComment commentHandler={this.submitCommentHandler} artId={this.props.id}/>}
      <button onClick={this.handleDelete}>Delete</button>
      </div>
    </div>
    
      
      )

}
}
export default Article