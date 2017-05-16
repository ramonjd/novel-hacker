import * as types from './mutation-types';

export const updateWordCount = ({ commit }, wordcount) => {
  console.log(wordcount);
  commit(types.UPDATE_WORD_COUNT, {
    wordcount,
  });
};

export const updateCountdown = ({ commit }, countdown) => {
  commit(types.UPDATE_COUNDOWN, {
    countdown,
  });
};
