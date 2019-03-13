import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import SVGInline from 'react-svg-inline';

import players from '~/players';

function importAll(r) {
  return r.keys().map(r);
}

const images = importAll(require.context('../../static/svg/', false, /\.svg$/));

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

    if (images.length > score) {
      this.tesoGeek = document.getElementById('Programmer');

      if (this.tesoGeek) {
        this.tesoGeek.addEventListener('click', () => {
          this.setState(state => ({ score: state.score + 1 }));
          this.tesoGeek = null;
        });
        this.interval = clearInterval(this.interval);
      }

      if (!this.interval && !this.tesoGeek) {
        this.startInterval();
      }
    }
  };

  startTimer = () => {
    const { history } = this.props;

    this.timeInterval = setInterval(() => {
      this.setState(
        state => ({ time: state.time - 1 }),
        () => {
          const { time, score } = this.state;
          const { updatePlayer, currentPlayerId } = this.props;

          if (time === 0) {
            this.timeInterval = clearInterval(this.timeInterval);
            updatePlayer({ score }, currentPlayerId);
            history.push('/finish');
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
    const { time } = this.state;

    return (
      <div>
        <div>{time}</div>
        {images[this.state.score] && <SVGInline svg={images[this.state.score]} />}
        {!images[this.state.score] && <p>You are amazing and Won</p>}
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
