import React, { Component } from 'react'
import RouterIndex from './router/index'
import MainHeader from './view/main-header'
import MainFooter from './view/main-footer'
import './view/index.css'
class App extends Component {
  render () {
    return (
      <div id="pageWrap">
        <MainHeader/>
        <main id="main">main</main>
        <MainFooter/>
      </div>
    )
  }
}



export default App;
