import React from 'react';
import { Route, BrowserRouter as Router, browserHistory } from 'react-router-dom';
import Wines from './components/Wines';

function Routes() {
  return (
    <Router history={browserHistory}>
      <Route path="/" component={Wines} />
    </Router>
  );
}

export default Routes;
