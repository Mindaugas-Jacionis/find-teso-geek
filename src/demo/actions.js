import { firebaseSetup } from '~/app/utils';
import * as types from './actionTypes';

// const locale = 'lt-LT';
// const DB_TABLE = new Date().toLocaleDateString(locale).replace(/-/g, '');
// const playersRef = Fire.database().ref(DB_TABLE);

const DB_DOC = firebaseSetup.database().ref('demo');

// const DB_REF = firebase.database().ref();
// const DB_DOC = DB_REF.child("todos");

export const demo = () => dispatch => {
  const { key } = DB_DOC.update({ count: Math.floor(Math.random() * 10000) });

  console.log('key', key);

  setTimeout(() => {
    dispatch({ type: types.DEMO });
  }, 1000);
};
