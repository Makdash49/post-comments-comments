import React from 'react';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';
import ListApp from 'ListApp';
import Post from 'Post';

export default (
  <Router history={hashHistory}>
    <Route path="/">
      <IndexRoute component={Post} />
    </Route>
  </Router>
);
