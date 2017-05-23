import * as types from '../mutation-types';

const state = {
  wordcount: 0,
};

const mutations = {
  [types.UPDATE_WORD_COUNT](state, { wordcount }) {
    state.wordcount = wordcount;
  },
};

export default {
  state,
  mutations,
};
