import React, { Component } from 'react'
import './App.css';
import Header from './Components/Header.js'
import ArticlesContainer from './Containers/ArticlesContainer';



class App extends React.Component {

  
  



  render(){
    console.log(this.state)
  return (
    <div className="App">
      <Header/>
      <ArticlesContainer/>
    </div>
  )
}}

export default App;
