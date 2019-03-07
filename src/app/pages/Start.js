import React from 'react';
// import { Link } from 'react-router-dom';
// import { bindActionCreators } from 'redux';
// import { connect } from 'react-redux';
import styled from 'styled-components';
import { Form, Field } from 'react-final-form';

const Container = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

const validate = ({ name, email, field, year, degree }) => {
  if (!name || !email || !field || !year || !degree) {
    return { hasErrors: true };
  }

  return {};
};

function Start({ history }) {
  console.log('Hi', history);
  const onSubmit = data => {
    console.log('I will create new user', data);
    history.replace('/game');
  };

  return (
    <Container>
      <Form
        onSubmit={onSubmit}
        validate={validate}
        render={({ handleSubmit, pristine, invalid }) => (
          <form onSubmit={handleSubmit}>
            <h1>Take the challenge!</h1>
            <div>
              <Field name="name" component="input" placeholder="Full Name" />
              <Field type="email" name="email" component="input" placeholder="Email" />
            </div>
            <div>
              <Field name="field" component="input" placeholder="Field of Study" />
              <div>
                <Field
                  min="0"
                  type="number"
                  name="year"
                  component="input"
                  placeholder="Year of Study"
                />
                <Field name="degree" component="input" placeholder="Degree" />
              </div>
            </div>
            <p>By submiting I agree to receive job offers from Tesonet</p>
            <button type="submit" disabled={pristine || invalid}>
              Submit
            </button>
          </form>
        )}
      />
    </Container>
  );
}

export default Start;
