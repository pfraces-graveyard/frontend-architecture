'use strict';

var store = require('./store');

var init = function () {
  store.dispatch({
    type: 'INIT'
  });
};

var updateName = function (event) {
  store.dispatch({
    type: 'UPDATE_NAME',
    name: event.target.value
  });
};

module.exports = {
  init: init,
  updateName: updateName
};
