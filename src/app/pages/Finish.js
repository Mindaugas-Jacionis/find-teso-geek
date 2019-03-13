import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import SVGInline from 'react-svg-inline';
import styled from 'styled-components';

import players from '~/players';
import finishPopcorn from '~/static/illustrations/finish-popcorn.svg';

const LinkButton = styled(Link)`
  margin: 10px;
  padding: 10px 35px;
  line-height: 32px;
  font-size: 22px;
  border-radius: 5px;
  border: 2px solid #00e778;
  text-decoration: none;
  background: #00e778;
  color: #fff;
  font-weight: 700;
  transition: background 0.3s;

  &:hover {
    background: #04ad60;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;

  .Score {
    color: #ffea00;
    font-size: 48px;
    line-height: 72px;
    font-weight: 700;
    background: #3c3c3c;
    padding: 0 35px;
    border-radius: 5px;
    margin-bottom: 20px;
  }
`;

const Background = styled(SVGInline)`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: -1;
  background: #222;

  svg {
    background: #222;
  }
`;

function Finish({ currentPlayer = {}, resetPlayer }) {
  return (
    <Container>
      <Background svg={finishPopcorn} />
      <p className="Score">
        {`${
          currentPlayer.name ? `${currentPlayer.name}, ` : ''
        }Your Score is: ${currentPlayer.score || 0}`}
      </p>
      <LinkButton onClick={resetPlayer} to="/start">
        Play Again
      </LinkButton>
    </Container>
  );
}

const enhance = connect(
  state => ({
    currentPlayer: players.selectors.getCurrentPlayer(state),
  }),
  dispatch =>
    bindActionCreators(
      {
        resetPlayer: players.actions.resetPlayer,
      },
      dispatch,
    ),
);

export default enhance(Finish);
