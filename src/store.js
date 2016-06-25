'use strict';

var redux = require('redux');

var store = redux.createStore(function (state, action) {
  state = state || { name: '' };

  if (action.type === 'UPDATE_NAME') {
    return { name: action.name };
  }

  return state;
});

module.exports = store;
