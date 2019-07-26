import React from 'react';
import { Route, Switch } from 'react-router-dom';
import home from './pages/Home';
import about from './pages/About';
import PageNotFound from './pages/PageNotFound';
import colections from './pages/Colections';
import Navigation from './Navigation';
import AlonePage from './pages/AlonePage';

const boxStyle = {
  border: '1px solid green',
  width: '800px',
  margin: '0 auto',
  height: '100vh',
};

const App = () => (
  <>
    <Navigation />
    <div style={boxStyle}>
      <Switch>
        <Route exact path="/" component={home} />
        <Route path="/about" component={about} />
        <Route path="/colections/:name" component={AlonePage} />
        <Route path="/colections" component={colections} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  </>
);

export default App;
