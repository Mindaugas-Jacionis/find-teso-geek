import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import routes from './routes';
import store from './state';

function App() {
  return (
    <Provider store={store}>
      <Router>{routes}</Router>
    </Provider>
  );
}

export default App;
