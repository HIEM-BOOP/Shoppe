
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './pages/Home';
import Add from './pages/Add';
import Cart from './pages/Cart';


function App() {
  return (
    <Router>
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/home-shoppe">
            < Home />
          </Route>
          <Route path="/add-products">
            <Add />
          </Route>
          <Route path="/cart-products">
            <Cart/>
          </Route>

          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>

  );
}

export default App;
