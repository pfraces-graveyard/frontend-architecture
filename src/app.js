'use strict';

var document = require('global/document');
var mount = require('./lib/mount');
var view = require('./view');
var store = require('./store');

var container = document.getElementById('container');
var render = mount(view, container);

store.subscribe(function() {
  render(store.getState());
});

store.dispatch({
  type: 'CONTENT',
  text: 'Hello World'
});
