'use strict';

var h = require('snabbdom/h');
var htag = require('hyperscript-helpers')(h);
var action = require('./action');

var div = htag.div;
var input = htag.input;
var p = htag.p;

var view = function (state) {
  return div([
    input({
      props: { type: 'text', placeholder: 'Type your name' },
      on: { input: action.updateName }
    }),
    p('Hello ' + state.name)
  ]);
};

module.exports = view;
