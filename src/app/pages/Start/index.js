import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Form, Field } from 'react-final-form';

import players from '~/players';
import { Background, Container } from './components';
import introProgrammer from '~/static/illustrations/intro-programmer.svg';
import introPopcorn from '~/static/illustrations/intro-popcorn.svg';

const validate = ({ name, email, studyField, year, degree, agree }) => {
  const errors = {};

  if (!name) {
    errors.name = true;
  }

  if (!email) {
    errors.email = true;
  }

  if (!studyField) {
    errors.studyField = true;
  }

  if (!year || year < 1) {
    errors.year = true;
  }

  if (!degree) {
    errors.degree = true;
  }

  if (!agree) {
    errors.agree = true;
  }

  return errors;
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
    const { history, newPlayer } = this.props;

    newPlayer({ ...data, score: 0 });
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
              <Field name="studyField" component="input" placeholder="Field of Study" />
              <div>
                <Field
                  min={0}
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
                  By submitting this form you agree that your contactinformation would be used for
                  marketing and recruitmentpurposes.
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

const enhance = connect(
  state => ({}),
  dispatch =>
    bindActionCreators(
      {
        newPlayer: players.actions.newPlayer,
      },
      dispatch,
    ),
);

export default enhance(Start);
