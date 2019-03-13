import styled from 'styled-components';

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

export default Container;
