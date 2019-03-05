import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Game, Start, Finish } from './pages';

export default (
  <Switch>
    <Route exact path="/start" component={Start} />
    <Route exact path="/game" component={Game} />
    <Route exact path="/finish" component={Finish} />
    <Redirect to="/start" />
  </Switch>
);
