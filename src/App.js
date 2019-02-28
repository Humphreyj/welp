import React, { Component } from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom'
import './App.css';
import Navigation from './components/Navigation'
import Home from './components/Home'
import User from './components/User'
import Ratings from './components/Ratings'
import Sidedrawer from './components/Sidedrawer'
import Backdrop from './components/Backdrop'


class App extends Component {

  state = {
    drawerOpen: false
  }

  drawerToggleHandler =() => {
    this.setState((prevState) => {
      return {drawerOpen: !prevState.drawerOpen}
    })
  }

  backdropClickHandler =() => {
    this.setState({drawerOpen:false})
  }

  render() {
    let backdrop;

    if(this.state.drawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />
    }



    return (
    <BrowserRouter>
      <div className="App">
        <Navigation drawerToggleHandler={this.drawerToggleHandler} />
        <Sidedrawer show={this.state.drawerOpen} />
        {backdrop}
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
