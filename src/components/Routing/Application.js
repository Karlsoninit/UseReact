/*eslint-disable*/
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import home from './HomePage';
import about from './AboutPage';
import article from './ArticlePage';
import error from './Error';
import Nav from './Nav';
import Article from './Article';
class Application extends Component {
  state = {};
  render() {
    return (
      <>
        <Nav />
        <Switch>
          <Route path="/" exact component={home} />
          <Route path="/about" component={about} />
          <Route path="/article/:id" component={Article} />
          <Route path="/article" component={article} />
          <Route component={error} />
        </Switch>
      </>
    );
  }
}

export default Application;
