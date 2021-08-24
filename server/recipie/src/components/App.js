import React , {Component} from 'react';
import "./App.css";
import Home from './Home';
import Recipies from './Recipies';
import SingleRecipie from './SingleRecipie';
import Default from './Default';
import {BrowserRouter as Router ,Route ,Switch} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navibar';
import Auth from './Auth/Auth';


class App extends Component{
  render ()
  {
    return (
      <Router>
        <main>
          {/* Navbar */}
          <Navbar/>
          <Switch>
            <Route path = "/" exact component = {Home}/>
            <Route path="/auth" exact component={Auth} />
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