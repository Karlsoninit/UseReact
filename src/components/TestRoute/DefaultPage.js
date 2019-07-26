import React from 'react';
import { Route, Switch } from 'react-router-dom';
import start from './Pages/Start';
import articles from './Pages/Articles';
import Nav from './Nav';
import article from './Pages/Article';
import PageNotFound from './Pages/PageNotFound';

const DefaultPage = () => (
  <>
    <Nav />
    <Switch>
      <Route path="/" exact component={start} />
      <Route path="/articles/:name" component={article} />
      <Route path="/articles" component={articles} />
      <Route component={PageNotFound} />
    </Switch>
  </>
);

export default DefaultPage;
