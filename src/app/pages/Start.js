import React from 'react';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import demo from '~/demo';

function Start({ demoValue, demoAction }) {
  return (
    <div>
      <Link to="/game">Start the Game</Link>
      <button type="button" onClick={demoAction}>
        {demoValue}
      </button>
    </div>
  );
}

const enhance = connect(
  state => ({
    demoValue: demo.selectors.demo(state),
  }),
  dispatch => bindActionCreators({ demoAction: demo.actions.demo }, dispatch),
);

export default enhance(Start);
