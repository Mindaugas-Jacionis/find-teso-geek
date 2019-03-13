import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';

import players from '~/players';
import routes from './routes';
import store from './state';

const GlobalStyle = createGlobalStyle`
  @font-face {
	font-family: 'Gordita';
	font-weight: normal;
	font-style: normal;
  src: url("../static/fonts/Gordita/GorditaRegular.woff2") format("woff2"),
       url("/fonts/Gordita/GorditaRegular.woff") format("woff");
}

@font-face {
	font-family: 'Gordita';
	font-weight: bold;
	font-style: normal;
  src: url("../assets/fonts/Gordita/GorditaBold.woff2") format("woff2"),
       url("/fonts/Gordita/GorditaBold.woff") format("woff");
}
  body {
    overflow-y: hidden;
    font-family: 'Gordita', sans-serif;
  }

  /* * {
    font-family: 'Gordita', sans-serif;
  } */
`;

class App extends React.Component {
  componentDidMount() {
    store.dispatch(players.actions.fetchAll());
  }

  render() {
    return (
      <React.Fragment>
        <GlobalStyle />
        <Provider store={store}>
          <Router>{routes}</Router>
        </Provider>
      </React.Fragment>
    );
  }
}

export default App;
