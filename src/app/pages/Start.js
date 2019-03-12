import React from 'react';
// import { bindActionCreators } from 'redux';
// import { connect } from 'react-redux';
import styled from 'styled-components';
import { Form, Field } from 'react-final-form';
import SVGInline from 'react-svg-inline';

import introProgrammer from '~/static/illustrations/intro-programmer.svg';
import introPopcorn from '~/static/illustrations/intro-popcorn.svg';

const Container = styled.div`
  display: flex;
  height: 100vh;
  justify-content: flex-start;
  align-items: center;
  margin: 0 5vw;

  form {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    max-width: 35vw;

    button,
    input {
      margin: 10px;
      padding: 5px 10px;
      line-height: 32px;
      font-size: 22px;
      border-radius: 5px;
      border: 2px solid #3c3c3c;
    }

    button {
      font-weight: 700;
    }

    button:enabled {
      background: #00e778;
      color: #242424;
      cursor: pointer;
      transition: background 0.3s;

      &:hover {
        background: #04ad60;
      }
    }

    button:disabled {
      background: #3c3c3c;
      color: #242424;
    }

    div {
      display: flex;
    }

    input {
      flex: 1;
      background: #242424;
      color: #fff;

      &[type='number'] {
        max-width: 105px;
        text-align: right;
        &::-webkit-inner-spin-button,
        &::-webkit-outer-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }
      }
    }

    .Agree-pp {
      color: #fff;
      margin: 10px 0;
      line-height: 22px;

      input {
        margin: 3px 10px 0;
        &:checked {
          background: #04ad60;
        }
      }
    }
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

const validate = ({ name, email, field, year, degree, agree }) => {
  if (!name || !email || !field || !year || !degree || !agree) {
    return { hasErrors: true };
  }

  return {};
};

class Start extends React.Component {
  state = {
    showPrize: false,
  };
  interval = null;

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState(state => ({ showPrize: !state.showPrize }));
    }, 5000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  onSubmit = data => {
    const { history } = this.props;
    history.replace('/game');
  };

  render() {
    const { showPrize } = this.state;

    return (
      <Container>
        <Background svg={showPrize ? introPopcorn : introProgrammer} />
        <Form
          onSubmit={this.onSubmit}
          validate={validate}
          render={({ handleSubmit, pristine, invalid }) => (
            <form onSubmit={handleSubmit}>
              <Field name="name" component="input" placeholder="Full Name" />
              <Field type="email" name="email" component="input" placeholder="Email" />
              <Field name="field" component="input" placeholder="Field of Study" />
              <div>
                <Field
                  min="0"
                  type="number"
                  name="year"
                  component="input"
                  placeholder="Study Year"
                />
                <Field name="degree" component="input" placeholder="Degree" />
              </div>
              <div className="Agree-pp">
                <div>
                  <Field name="agree" component="input" type="checkbox" />
                </div>
                <p>
                  By submiting I agree to receive job offers from Tesonet By submiting I agree to
                  receive job offers from Tesonet By submiting I agree to receive job offers from
                  Tesonet
                </p>
              </div>
              <button type="submit" disabled={pristine || invalid}>
                Submit
              </button>
            </form>
          )}
        />
      </Container>
    );
  }
}

export default Start;
