import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';

import players from '~/players';
import routes from './routes';
import store from './state';
import gorditaRegularWoff2 from '../static/fonts/Gordita/GorditaRegular.woff2';
import gorditaRegularWoff from '../static/fonts/Gordita/GorditaRegular.woff';
import gorditaMediumWoff from '../static/fonts/Gordita/GorditaMedium.woff';
import gorditaMediumWoff2 from '../static/fonts/Gordita/GorditaMedium.woff2';
import gorditaBoldWoff from '../static/fonts/Gordita/GorditaBold.woff';
import gorditaBoldWoff2 from '../static/fonts/Gordita/GorditaBold.woff2';

const GlobalStyle = createGlobalStyle`
  @font-face {
	  font-family: 'GorditaRegular';
	  font-weight: 400;
	  font-style: normal;
    src: url(${gorditaRegularWoff2}) format("woff2"), url(${gorditaRegularWoff}) format("woff");
  }

  @font-face {
    font-family: 'GorditaMedium';
    font-weight: 500;
    font-style: normal;
    src: url(${gorditaMediumWoff2}) format("woff2"), url(${gorditaMediumWoff}) format("woff");
  }

  @font-face {
    font-family: 'GorditaBold';
    font-weight: 700;
    font-style: normal;
    src: url(${gorditaBoldWoff2}) format("woff2"), url(${gorditaBoldWoff}) format("woff");
  }

  body {
    overflow-y: hidden;
    font-family: 'GorditaRegular';
  }
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
