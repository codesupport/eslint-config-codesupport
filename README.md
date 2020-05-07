# CodeSupport's ESLint Config

## Table of Contents
- [Variables](#variables)

## Style Guide

### Variables
These rules relate to variable declarations.

#### Disallow Deleting Variables
This rule disallows the use of the delete operator on variables.

#### Incorrect Code
```js
let x;
delete x;
```

[View rule on ESLint.org](https://eslint.org/docs/rules/no-delete-var#top)

### Disallow Unused Variables
This rule is aimed at eliminating unused variables, functions, and function parameters.

#### Incorrect Usage
```js
let x;

function doSomething(y) {
    return 5;
}
```

#### Correct Usage
```js
let x = 5;

function doSomething(y) {
    return y * 2;
}

console.log(doSomething(x));
```

[View rule on ESLint.org](https://eslint.org/docs/rules/no-unused-vars#top)

### Disallow Early Use
This rule will warn when it encounters a reference to an identifier that has not yet been declared.

#### Incorrect Usage
```js
console.log(a);

let a = 5;
```

#### Correct Usage
```js
let a = 5;

console.log(a);
```

[View rule on ESLint.org](https://eslint.org/docs/rules/no-use-before-define#top)

### Enforce `require()` on the top-level module scope
This rule requires all calls to `require()` to be at the top level of the module, similar to ES6 `import` and `export` statements, which also can occur only at the top level.

#### Incorrect Usage
```js
console.log("Starting application...");

const fs = require("fs");

fs.readFile("example.txt");
```

#### Correct Usage
```js
const fs = require("fs");

console.log("Starting application...");

fs.readFile("example.txt");
```

[View rule on ESLint.org](https://eslint.org/docs/rules/global-require#top)
