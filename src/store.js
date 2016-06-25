'use strict';

var redux = require('redux');

var store = redux.createStore(function (state, action) {
  return action;
});

module.exports = store;
