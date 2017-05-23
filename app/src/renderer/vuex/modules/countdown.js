import * as types from '../mutation-types';
import countdown from '../../services/countdown';

const DEFAULT_STATE = {
  countdown: '00:00:00',
  paused: true,
  complete: true,
  percentage: 0,
};

const state = Object.assign({}, DEFAULT_STATE);

const getters = {
  countdown: state => state.countdown,
  complete: state => state.complete,
  paused: state => state.paused,
  percentage: state => state.percentage,
};

const actions = {
  start({ state, commit, rootState }) {
    countdown.start({
      onTick: (countdown, percentage) => {
        commit(types.UPDATE_COUNTDOWN_STATE, { countdown, percentage });
      },
    });
  },
  toggle({ state, commit, rootState }) {
      commit(types.UPDATE_COUNTDOWN_STATE, { paused: countdown.toggle() });
  },
  stop({ state, commit, rootState }) {
    countdown.stop();
    commit(types.UPDATE_COUNTDOWN_STATE, Object.assign({}, DEFAULT_STATE));
  },
};

const mutations = {
  [types.UPDATE_COUNTDOWN_STATE](state, newState) {
    Object.assign({}, state, newState);
  },
};


export default {
  state,
  getters,
  actions,
  mutations,
};
