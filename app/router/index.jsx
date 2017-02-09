import React from 'react';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';
import ListApp from 'ListApp';

export default (
  <Router history={hashHistory}>
    <Route path="/">
      <IndexRoute component={ListApp} />
    </Route>
  </Router>
);
