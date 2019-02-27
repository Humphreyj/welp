import React, { Component } from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom'
import './App.css';
import Navigation from './components/Navigation'
import Home from './components/Home'
import User from './components/User'
import Ratings from './components/Ratings'
import Sidebar from './components/Sidebar'

class App extends Component {
  render() {
    return (
    <BrowserRouter>
      <div className="App">
        <Navigation />
        <Switch>
          <Route path='/' component={Home} exact/>
          <Route path='/profile' component={User} />
          <Route path='/ratings' component={Ratings} />
        </Switch>
      </div> 
    </BrowserRouter>
    );
  }
}

export default App;
