import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import routes from './routes';
import store from './state';

function App() {
  return (
    <React.Fragment>
      <Provider store={store}>
        <Router>{routes}</Router>
      </Provider>
    </React.Fragment>
  );
}

export default App;
