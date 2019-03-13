import { NAME } from './constants';
import idx from 'idx';

export const getCurrentPlayerId = state => idx(state, s => s[NAME].currentPlayer);
export const getCurrentPlayer = state => {
  const id = getCurrentPlayerId(state);
  const allPlayers = idx(state, s => s[NAME].allPlayers);

  return allPlayers.find(player => player.id === id);
};
