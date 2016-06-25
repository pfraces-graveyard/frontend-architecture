'use strict';

var document = require('global/document');
var mount = require('./lib/mount');
var view = require('./view');
var store = require('./store');
var action = require('./action');

var container = document.getElementById('container');
var render = mount(view, container);

store.subscribe(function() {
  render(store.getState());
});

action.init();
