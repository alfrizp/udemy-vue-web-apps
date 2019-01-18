// https://official-joke-api.appspot.com/jokes/random
// https://official-joke-api.appspot.com/jokes/ten
import * as types from './mutation-types';

export const initJokes = ({commit}) => {
  fetch('https://official-joke-api.appspot.com/jokes/ten', {
    method: 'GET'
  }).then(res => res.json())
    .then(json => commit(types.INIT_JOKES, json))
}

export const addJoke = ({commit}) => {
  fetch('https://official-joke-api.appspot.com/jokes/random', {
    method: 'GET'
  }).then(res => res.json())
    .then(json => commit(types.ADD_JOKE, json))
}

export const removeJoke = ({commit}, index) => {
  commit(types.REMOVE_JOKE, index);
}
