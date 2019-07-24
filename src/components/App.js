import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import Colections from './pages/Colections';
import Error from './pages/Error';

const App = () => (
  <>
    <ul>
      <li>
        <Link exact to="/">
          Home
        </Link>
      </li>
      <li>
        <Link to="/About">About</Link>
      </li>
      <li>
        <Link to="/Colections">Colections</Link>
      </li>
    </ul>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/about" component={About} />
      <Route path="/Colections" component={Colections} />
      <Route component={Error} />
    </Switch>
  </>
);

export default App;
