import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import players from '~/players';
import routes from './routes';
import store from './state';

class App extends React.Component {
  componentDidMount() {
    store.dispatch(players.actions.fetchAll());
  }

  render() {
    return (
      <React.Fragment>
        <Provider store={store}>
          <Router>{routes}</Router>
        </Provider>
      </React.Fragment>
    );
  }
}

export default App;
