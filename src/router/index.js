import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import Index from '../view/index/index.js'
import About from '../view/about'
import User from '../view/user'
import Details from '../view/details'
import Book from '../view/book'

class RouterIndex extends Component {
  render () {
    return (
      <Switch>
        <Route path='/' exact render={ () =>(
          <Redirect to='/index' />
        )}/>
        <Route path='/index' component={ Index } />
        <Route path='/book' component={ Book } />
        <Route path='/details' component={ Details } />
        <Route path='/about' component={ About } />
        <Route path='/user' component={ User } />
      </Switch>
    )
  }
}

export default RouterIndex