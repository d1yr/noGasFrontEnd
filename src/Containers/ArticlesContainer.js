import React from 'react';
import Article from '../Components/Article.js';
import NewArticle from '../Components/NewArticle.js'
import NewUser from '../Components/NewUser.js'

class ArticlesContainer extends React.Component {

  state={
    articles: [],
    users: [],
    favorites: [],
    comments: [],
    artKey: 1,
    isHidden1: false,
    isHidden2: false,
  }

  componentDidMount(){
      Promise.all([fetch('http://localhost:3000/articles'), fetch('http://localhost:3000/users'), fetch('http://localhost:3000/comments'), fetch('http://localhost:3000/favorites')])
  
        .then(([res1, res2, res3, res4]) => { 
           return Promise.all([res1.json(), res2.json(), res3.json(), res4.json()]) 
        })
        .then(([res1, res2, res3, res4]) => {
          this.setState({
            articles: res1, users: res2, comments: res3, favorites: res4
          })
        });
  }

  rendArticle(){
    console.log(this.state)
    const array3 = this.state.articles.filter((obj) => obj.id === this.state.artKey)
    return array3.map((o) => <Article key={o.id.toString()} id={o.id} title={o.title} image1={o.image1} image2={o.image2} content={o.content} user_id={o.user_id} users={this.state.users} comments={this.state.comments} deleteArticle={this.deleteArticle} isHidden3={this.state.isHidden3} users={this.state.users}/>)
    
  }

  submitArticleHandler=(newArticle, e)=>{
    console.log(newArticle)

    this.setState({ articles: [newArticle, ...this.state.articles] })
  }

  submitUserHandler=(newUser, e)=>{
    console.log(newUser)

    this.setState({ user: [newUser, ...this.state.users] })
  }

  deleteArticle=(e)=>{
    let copyOfArticles = this.state.articles.filter((j)=>{
      return j.id !== e
    })
    console.log(copyOfArticles)
    this.setState({
      articles: copyOfArticles
    })
  }

  nextArticle=(e)=>{
    console.log(this.state.artKey)
    this.setState({
      artKey: this.state.artKey + 1
    })

  }

  prevArticle=(e)=>{
    console.log(this.state.artKey)
    this.setState({
      artKey: this.state.artKey - 1
    })

  }

  toggleHidden1 (){
    this.setState({
      isHidden1: !this.state.isHidden1
    })
  }



  toggleHidden2 (){
    this.setState({
      isHidden2: !this.state.isHidden2
    })
  }


  render(){
    console.log(this.state)
  return (
    <div>
    <div>
    {this.rendArticle()}
    <button onClick={this.prevArticle}>Prev Article</button>
    <button onClick={this.nextArticle}>Next Article</button>
    </div>
    <div><button onClick={this.toggleHidden1.bind(this)}>New Article</button>{this.state.isHidden1 && <NewArticle submitArticleHandler={this.submitArticleHandler} articles={this.state.articles}/>}
    </div>
    </div>
  )
    }
};

export default ArticlesContainer;
