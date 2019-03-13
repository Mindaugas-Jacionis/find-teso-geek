import { firebaseSetup } from '~/app/utils';
import * as types from './actionTypes';

const locale = 'lt-LT';
const DB_TABLE = new Date().toLocaleDateString(locale).replace(/-/g, '');
const playersRef = firebaseSetup.database().ref(DB_TABLE);

const fetchAllPlayers = async () => {
  let players = await playersRef.once('value').then(response => {
    return response.val();
  });

  players = Object.keys(players).map((key, i) =>
    Object.assign({}, players[key], {
      id: key,
    }),
  );

  return players;
};

export const fetchAll = () => async dispatch => {
  dispatch({ type: types.FETCH_ALL });

  try {
    const players = await fetchAllPlayers();
    dispatch({ type: types.FETCH_ALL_SUCCESS, payload: players });
  } catch (err) {
    dispatch({ type: types.FETCH_ALL_FAILURE, payload: err });
  }
};

export const newPlayer = data => {
  const currentPlayer = firebaseSetup
    .database()
    .ref(DB_TABLE)
    .push(data);

  console.log('Hi', currentPlayer, data);

  return {
    type: types.NEW_PLAYER,
    payload: { ...data, id: currentPlayer.key },
  };
};

export const updatePlayer = (player, id) => {
  console.log(player, id);
  const updated = playersRef.child(id).update(player);

  console.log(updated, player, id);

  return {
    type: types.UPDATE_PLAYER,
    payload: {
      id,
      player,
    },
  };
};
