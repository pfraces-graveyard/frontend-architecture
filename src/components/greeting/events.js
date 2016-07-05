'use strict';

var store = require('../../store');

module.exports = {
  name: {
    input: function (event) {
      store.dispatch({
        type: 'UPDATE_NAME',
        name: event.target.value
      });
    }
  }
};
