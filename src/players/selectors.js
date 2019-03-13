import { NAME } from './constants';
import idx from 'idx';

export const getCurrentPlayerId = state =>
  console.log(state) || idx(state, s => s[NAME].currentPlayer);
