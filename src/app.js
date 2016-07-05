'use strict';

var document = require('global/document');
var mount = require('./lib/mount');
var view = require('./components/greeting/view');
var store = require('./store');

var render = mount(view, document.getElementById('container'));

store.subscribe(function() {
  render(store.getState());
});

store.dispatch({
  type: 'INIT'
});
