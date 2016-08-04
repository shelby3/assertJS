/* Configure JSHint warnings, http://jshint.com/docs/options/, http://stackoverflow.com/questions/17535130/where-can-i-find-a-list-of-jshint-numeric-error-codes#17541721 */// jshint asi:true, devel:true, eqeqeq:true, esnext:true, strict:true, undef:true

/*
Polyfill for:
  https://github.com/whatwg/console/issues/63
*/
console.assert = (function() {
    'use strict'
    const assert = console.assert
    return function(...args) {
      assert.apply(args, console)
      return !args[0]
    }
  })()