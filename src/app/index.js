import React from 'react';
import SVGInline from 'react-svg-inline';

function importAll(r) {
  return r.keys().map(r);
}

const images = importAll(require.context('../static/svg/', false, /\.svg$/));

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 0,
    };
    this.tesoGeek = null;
    this.interval = null;
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

  componentDidMount() {
    this.handleTesoGeek();
  }

  componentDidUpdate() {
    this.handleTesoGeek();
  }

  componentWillUnmount() {
    this.interval = clearInterval(this.interval);
  }

  render() {
    console.log('State', this.state);
    console.log('All', images);
    return (
      <div ref={this.svgRef} onClick={e => console.log(e.target)}>
        {images[this.state.score] && <SVGInline svg={images[this.state.score]} />}
        {!images[this.state.score] && <p>You are amazing and Won</p>}
      </div>
    );
  }
}

export default App;
