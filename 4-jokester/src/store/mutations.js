import * as types from './mutation-types';

export const mutations = {
  [types.INIT_JOKES] (state, jokes) {
    state.jokes.push(...jokes);
  },

  [types.ADD_JOKE] (state, joke) {
    state.jokes.push(joke);
  },

  [types.REMOVE_JOKE] (state, index) {
    state.jokes.splice(index, 1);
  }
}