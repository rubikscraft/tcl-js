# tcl-js

> A native javascript tcl interpreter

[![tcl-js](https://img.shields.io/npm/v/tcl-js.svg?style=flat&color)](https://www.npmjs.com/package/tcl-js)
[![Build Status](https://travis-ci.org/rubikscraft/tcl-js.svg?branch=master&style=flat)](https://travis-ci.org/rubikscraft/tcl-js)
[![Coverage](https://img.shields.io/codecov/c/github/rubikscraft/tcl-js.svg&style=flat)](https://codecov.io/gh/rubikscraft/tcl-js)
[![install size](https://packagephobia.now.sh/badge?p=tcl-js)](https://packagephobia.now.sh/result?p=tcl-js&style=flat)

## Important

I can not guarantee that everything works as it should, and the api will probably still change.
Therefore it is not recommended use this package in production yet.

But it would be highly appreciated if this package was heavily tested, cause it is impossible for me to test every scenario.

## Documentation

You can find the documentation [here](https://htmlpreview.github.io/?https://github.com/rubikscraft/tcl-js/blob/master/docs/index.html)

## Status

### Currently working tcl commands

These commands should be fully working according to the tcl wiki

- eval
- expr
- lindex
- list
- proc
- puts
- set
- unset

### Partially working commands

Only part of these commands are finished and may not work as expected

- info

### Other working parts

These are not commands but just general parts of the interpreter, if they are listed they work

- lexer
- parser
- command handler
- object and array variables
- list variables
- custom functions
- scoping
- interpreter
