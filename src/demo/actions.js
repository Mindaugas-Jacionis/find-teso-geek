import * as types from './actionTypes';

export const demo = () => dispatch => {
  setTimeout(() => {
    dispatch({ type: types.DEMO });
  }, 1000);
};
