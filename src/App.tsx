
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './pages/Home';
import Add from './pages/Add';
import Cart from './pages/Cart';
import SignIn from './components/login/SingIn';
import { useState } from 'react';
import Detail from './components/home/Detail';

function App() {
  return (
    <Router>
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/home">
            < Home />
          </Route>
          <Route path="/add-products">
            <Add />
          </Route>
          <Route path="/cart-products">
            <Cart/>
          </Route>
          <Route path="/detail">
            <Detail/>
          </Route>
          <Route path="/">
            <SignIn />
          </Route>
        </Switch>
      </div>
    </Router>

  );
}

export default App;

interface State {
  isLogin : boolean;
}