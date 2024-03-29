import React, { Component } from 'react'
import {Route,Switch,Redirect} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import MyNavLink from './components/MyNavLink'


export default class App extends Component {

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-xs-offset-2 col-xs-8">
            <div className="page-header"><h2>React Router Demo</h2></div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-2 col-xs-offset-2">
            <div className="list-group">

              {/* <a className="list-group-item active" href="./about.html">About</a>
              <a className="list-group-item" href="./home.html">Home</a> */}
                {/* <NavLink activeClassName='sv' className="list-group-item" to="/about">About</NavLink>
                <NavLink activeClassName='sv' className="list-group-item" to="/home">Home</NavLink>  */}
                
                  <MyNavLink to="/about">About</MyNavLink>
                  <MyNavLink to="/home">Home</MyNavLink>
                
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                  <Switch>
                    {/* <Route exact={true} path="/about" component={About}/>
                    <Route exact={true} path="/home" component={Home}/> */}
                    <Route path="/about" component={About}/>
                    <Route path="/home" component={Home}/>
                    <Redirect to="/about" />
                  </Switch>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
