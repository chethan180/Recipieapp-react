import React , {Component} from 'react';
import "./App.css";
import Home from './Home';
import Recipies from './Recipies';
import SingleRecipie from './SingleRecipie';
import Navibar from './Navibar';
import Default from './Default';
import Signup from './Signup';
import Login from './Login';
import {BrowserRouter as Router ,Route ,Switch} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component{
  render ()
  {
    return (
      <Router>
        <main>
          {/* Navbar */}
          <Navibar/>
          <Switch>
            <Route path = "/login" exact component = {Login}/>
            <Route path = "/signup" exact component = {Signup}/>
            <Route path = "/" exact component = {Home}/>
            <Route path = "/recipies/" exact component = {Recipies}/>
            <Route path = "/recipies/:id" component = {SingleRecipie}/>
            <Route  component = {Default}/>            
          </Switch>
        </main>
      </Router>
    ) ;
  };
};

export default App;