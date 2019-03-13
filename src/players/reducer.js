import * as types from './actionTypes';

const DEFAULT_STATE = {
  allPlayers: [],
  error: null,
  fetching: false,
  currentPlayer: null,
};

export default (state = DEFAULT_STATE, { type, payload }) => {
  switch (type) {
    case types.FETCH_ALL:
      return { ...state, fetching: true, err: null, allPlayers: state.allPlayers };
    case types.FETCH_ALL_SUCCESS:
      return { ...state, fetching: false, allPlayers: payload };
    case types.FETCH_ALL_FAILURE:
      return { ...state, fetching: false, err: payload };

    case types.NEW_PLAYER:
      return { ...state, currentPlayer: payload.id, allPlayers: [...state.allPlayers, payload] };

    case types.UPDATE_PLAYER:
      return {
        ...state,
        allPlayers: state.allPlayers.map(player => {
          if (player.id === payload.id) {
            return { ...player, ...payload.player };
          }

          return player;
        }),
      };

    default:
      return state;
  }
};
