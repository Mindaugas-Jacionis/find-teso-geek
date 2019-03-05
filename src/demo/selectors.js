import { NAME } from './constants';
import idx from 'idx';

export const demo = state => idx(state, s => s[NAME].count);
