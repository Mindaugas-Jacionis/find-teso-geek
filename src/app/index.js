import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import styled from 'styled-components';
import SVGInline from 'react-svg-inline';

import routes from './routes';
import store from './state';
import background from '~/static/background.svg';

const Background = styled(SVGInline)`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: -1;
  background: #222;

  svg {
    display: block;
    margin: 0 auto;
    padding: 20vh 15vw 10vh;
    margin: 0 auto;
    background: #222;
    box-sizing: border-box;
    max-width: 100vw;
}
  }
`;

function App() {
  return (
    <React.Fragment>
      <Background svg={background} />
      <Provider store={store}>
        <Router>{routes}</Router>
      </Provider>
    </React.Fragment>
  );
}

export default App;
