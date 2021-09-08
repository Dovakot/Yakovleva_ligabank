import {NameSpace} from '../root-reducer';

const getHistory = (state) => state[NameSpace.HISTORY].data;

export {
  getHistory
};
