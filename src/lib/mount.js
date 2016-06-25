'use strict';

var snabbdom = require('snabbdom');

var patch = snabbdom.init([
  require('snabbdom/modules/class'),
  require('snabbdom/modules/props'),
  require('snabbdom/modules/style'),
  require('snabbdom/modules/eventlisteners')
]);

var mount = function (view, element) {
  var node = element;

  return function (state) {
    node = patch(node, view(state));
  };
};

module.exports = mount;
