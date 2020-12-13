import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './pages/Home';
import Add from './pages/Add';


function App() {
  return (
    <Router>
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/">
            < Home/>
          </Route>
          <Route path="/home-shoppe">
           
          </Route>

          <Route exact path="/add-products">
              <Add/>
          </Route>
        </Switch>
      </div>
    </Router>

  );
}

export default App;
