'use strict';

var h = require('snabbdom/h');
var tag = require('hyperscript-helpers')(h);

var div = tag.div;
var p = tag.p;

var view = function (state) {
  return div([
    p(state.text)
  ]);
};

module.exports = view;
