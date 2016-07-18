Frontend Architecture
=====================

Component-based Architecture
----------------------------

### Isolated Components

  * decoupled components
  * externalizable/distributable components
  * nestable components

### Styles

  * local styles (through css modules)
  * themeable styles (through preprocessor)

### Templates

  * html-like template syntax

### Scripts

  * virtual DOM based pure render: `view = state -> vtree`
  * redux-like pure reducers: `update = (state, action) -> state`
  * event delegation

### Developer Tools

  * linter, type checks
  * hot module replacement
  * living style guide
  * editor tools: refactor, autocompletion, debugger

Styles
------

### CSS modules

  * <https://github.com/css-modules/css-modules>

### Sass

  * <http://sass-lang.com/>
  * <http://susy.oddbird.net/>
  * <http://breakpoint-sass.com/>
  * <http://eyeglass.rocks/>

Scripts
-------

### Snabbdom

  * <https://github.com/paldepind/snabbdom>
  * [react less virtual dom with snabbdom functions everywhere](https://medium.com/@yelouafi/react-less-virtual-dom-with-snabbdom-functions-everywhere-53b672cb2fe3)
  * [elm architecture side effect examples with snabbdom and jsx](https://medium.com/@yelouafi/elm-architecture-side-effect-examples-with-snabbdom-and-jsx-3732219d9995)

### Redux

  * [redux introductory videos](https://egghead.io/lessons/javascript-redux-the-single-immutable-state-tree?course=getting-started-with-redux)
  * <https://facebook.github.io/immutable-js/>

### Redux + Snabbdom

  * [redux-snabbdom hello world example](http://blog.sarabande.jp/post/140826049718)
  * [redux-snabbdom-typescript](http://www.webpackbin.com/V1X59HYrZ)
  * <https://github.com/andyrj/snabbdom-redux-starter>

Related Resources
-----------------

### TypeScript

  * [typescript](https://www.typescriptlang.org/docs/handbook/basic-types.html)

### Reactive programming

  * [elm architecture](http://guide.elm-lang.org/architecture/index.html)
  * [introduction to reactive programming](https://gist.github.com/staltz/868e7e9bc2a7b8c1f754)
  * [cyclejs introductory videos](https://egghead.io/courses/cycle-js-fundamentals)

### Streams

  * <http://staltz.com/xstream/>
  * <https://github.com/cujojs/most>

### Frameworks

  * <https://github.com/Raynos/mercury>
  * <http://cycle.js.org/>
  * <https://github.com/paldepind/functional-frontend-architecture>
