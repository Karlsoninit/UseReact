import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Navigation from './Navigation';
import Loadable from 'react-loadable';
import Loading from './Loading';

const HomeLoad = Loadable({
  loader: () => import('./pages/Home' /* webpackChunkName: "Home-page" */),
  loading: Loading,
});
const AboutLoad = Loadable({
  loader: () => import('./pages/About' /* webpackChunkName: "About-page" */),
  loading: Loading,
});
const AlonePageLoad = Loadable({
  loader: () =>
    import('./pages/AlonePage' /* webpackChunkName: "AlonePage-page" */),
  loading: Loading,
});
const ColectionsLoad = Loadable({
  loader: () =>
    import('./pages/Colections' /* webpackChunkName: "Colections-page" */),
  loading: Loading,
});
const PageNotFoundLoad = Loadable({
  loader: () =>
    import('./pages/PageNotFound' /* webpackChunkName: "PageNotFound" */),
  loading: Loading,
});

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
        <Route exact path="/" component={HomeLoad} />
        <Route path="/about" component={AboutLoad} />
        <Route path="/colections/:name" component={AlonePageLoad} />
        <Route path="/colections" component={ColectionsLoad} />
        <Route component={PageNotFoundLoad} />
      </Switch>
    </div>
  </>
);

export default App;
