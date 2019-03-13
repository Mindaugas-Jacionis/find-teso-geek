import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import SVGInline from 'react-svg-inline';
import styled from 'styled-components';

import players from '~/players';

function importAll(r) {
  return r.keys().map(r);
}

const images = importAll(require.context('../../static/svg/', false, /\.svg$/));

const Timer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  font-size: 32px;
  line-height: 42px;
  font-weight: 700;
  background: #3c3c3c;
  padding: 0 35px;
  border-radius: 5px;
  color: #ffea00;
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 0,
      time: 30,
    };
    this.tesoGeek = null;
    this.interval = null;
    this.timeInterval = null;
  }

  startInterval = () => {
    this.interval = setInterval(() => {
      this.handleTesoGeek();
    }, 100);
  };

  handleTesoGeek = () => {
    const { score } = this.state;

    if (images.length > score && !this.tesoGeek) {
      const foundGeek = document.getElementById('Programmer');

      if (foundGeek) {
        this.tesoGeek = foundGeek;
        this.tesoGeek.addEventListener('click', () => {
          this.setState(
            state => ({ score: state.score + 1 }),
            () => {
              const { score } = this.state;

              if (!images[score]) {
                this.interval = clearInterval(this.interval);
                this.finishGame();
              }
            },
          );
          this.tesoGeek = null;
        });
        this.interval = clearInterval(this.interval);
      }

      if (!this.interval && !this.tesoGeek) {
        this.startInterval();
      }
    }
  };

  finishGame = () => {
    const { time, score } = this.state;
    const { updatePlayer, currentPlayerId, history } = this.props;
    const finalScore = score + time;

    this.timeInterval = clearInterval(this.timeInterval);
    updatePlayer({ score: finalScore }, currentPlayerId);
    history.push('/finish');
  };

  startTimer = () => {
    this.timeInterval = setInterval(() => {
      this.setState(
        state => ({ time: state.time - 1 }),
        () => {
          const { time, score } = this.state;

          if (time === 0) {
            this.timeInterval = clearInterval(this.timeInterval);
            this.finishGame();
          }
        },
      );
    }, 1000);
  };

  componentDidMount() {
    this.handleTesoGeek();
    this.startTimer();
  }

  componentDidUpdate() {
    this.handleTesoGeek();
  }

  componentWillUnmount() {
    this.interval = clearInterval(this.interval);
    this.timeInterval = clearInterval(this.timeInterval);
  }

  render() {
    const { time, score } = this.state;

    return (
      <div>
        <Timer>{`Time: ${time} / Score: ${score}`}</Timer>
        {images[this.state.score] && <SVGInline svg={images[this.state.score]} />}
      </div>
    );
  }
}

const enhance = connect(
  state => ({
    currentPlayerId: players.selectors.getCurrentPlayerId(state),
  }),
  dispatch => bindActionCreators({ updatePlayer: players.actions.updatePlayer }, dispatch),
);

export default enhance(App);
