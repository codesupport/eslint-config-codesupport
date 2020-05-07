# CodeSupport's ESLint Config

## Table of Contents
- [Variables](#variables)
  - [Disallow Deleting Variables](#disallow-deleting-variables)
  - [Disallow Unused Variables](#disallow-unused-variables)
  - [Disallow Early Use](#disallow-early-use)
  - [Enforce `require()` On The Top Level Module Scope](#enforce-require-on-the-top-level-module-scope)
- [Possible Errors](#possible-errors)

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

## Possible Errors
These rules relate to possible syntax or logic errors in JavaScript code.

### Disallow Duplicate Arguments In Function Definitions
This rule disallows duplicate parameter names in function declarations or expressions. It does not apply to arrow functions or class methods, because the parser reports the error.

#### Incorrect Usage
```js
function addNumbers(number, number) {
    return number + number;
}
```

#### Correct Usage
```js
function addNumbers(a, b) {
    return a + b;
}
```

[View rule on ESLint.org](https://eslint.org/docs/rules/no-dupe-args#top)

### Disallow Duplicate Keys In Object Literals
This rule disallows duplicate keys in object literals.

#### Incorrect Usage
```js
const data = {
    name: "Jack",
    name: "Jill"
};
```

#### Correct Usage
```js
const data = {
    name_one: "Jack",
    name_two: "Jill"
};
```

[View rule on ESLint.org](https://eslint.org/docs/rules/no-dupe-keys#top)

### Rule To Disallow A Duplicate Case Label
This rule disallows duplicate test expressions in `case` clauses of `switch` statements.

#### Incorrect Usage
```js
switch (x) {
    case 1:
        break;
    case 1:
        break;
}
```

#### Correct Usage
```js
switch (x) {
    case 1:
        break;
    case 2:
        break;
}
```

[View rule on ESLint.org](https://eslint.org/docs/rules/no-duplicate-case#top)

### Disallow Empty Block Statements
This rule disallows empty block statements. This rule ignores block statements which contain a comment (for example, in an empty `catch` or `finally` block of a `try` statement to indicate that execution should continue regardless of errors).

#### Incorrect Usage
```js
if (condition) {
}
```

#### Correct Usage
```js
if (condition) {
    console.log("Hello!");
}
```

[View rule on ESLint.org](https://eslint.org/docs/rules/no-empty)

### Disallow Reassigning Exceptions In Catch Clauses
This rule disallows reassigning exceptions in `catch` clauses.

#### Incorrect Usage
```js
try {
    getData();
} catch (error) {
    error = 5;
}
```

#### Correct Usage
```js
try {
    getData();
} catch (error) {
    const number = 5;
}
```

[View rule on ESLint.org](https://eslint.org/docs/rules/no-ex-assign#top)

### Disallow Unnecessary Parentheses
This rule restricts the use of parentheses to only where they are necessary.

#### Incorrect Usage
```js
const a = (5 * 2);
```

#### Correct Usage
```js
const a = 5 * 2;
```

[View rule on ESLint.org](https://eslint.org/docs/rules/no-extra-parens#top)

### Disallow Unnecessary Semicolons
This rule disallows unnecessary semicolons.

#### Incorrect Usage
```js
let x = 5;;
```

#### Correct Usage
```js
let x = 5;
```

[View rule on ESLint.org](https://eslint.org/docs/rules/no-extra-semi#top)

### Disallow Reassigning `function` Declarations 
This rule disallows reassigning `function` declarations.

#### Incorrect Usage
```js
function getData() {
    return {
        name: "John"
    };
}

function getData() {
    return {
        title: "This is an article."
    };
}
```

#### Correct Usage
```js
function getUserData() {
    return {
        name: "John"
    };
}

function getArticleData() {
    return {
        title: "This is an article."
    };
}
```

[View rule on ESLint.org](https://eslint.org/docs/rules/no-func-assign#top)

### Disallow Variable or `function` Declarations In Nested Blocks
This rule requires that function declarations and, optionally, variable declarations be in the root of a program or the body of a function.

#### Incorrect Usage
```js
if (condition) {
    function doSomething() {}
}
```

#### Correct Usage
```js
function doSomething() {}

if (condition) {
    let x = 5;
}
```

[View rule on ESLint.org](https://eslint.org/docs/rules/no-inner-declarations#top)

### Disallow Invalid Regular Expression Strings In RegExp Constructors
This rule disallows invalid regular expression strings in RegExp constructors.

#### Incorrect Usage
```js
new RegExp("[");
```

#### Correct Usage
```js
new RegExp(".");
```

[View rule on ESLint.org](https://eslint.org/docs/rules/no-invalid-regexp#top)

### Disallow Calling Global Object Properties As Functions
This rule disallows calling the `Math`, `JSON`, `Reflect` and `Atomics` objects as functions.

#### Incorrect Usage
```js
const json = JSON();
```

#### Correct Usage
```js
JSON.parse({
    "some": "data"
});
```

[View rule on ESLint.org](https://eslint.org/docs/rules/no-obj-calls#top)

### Disallow Template Literal Placeholder Syntax In Regular Strings
This rule aims to warn when a regular string contains what looks like a template literal placeholder. It will warn when it finds a string containing the template literal placeholder (`${something}`) that uses either `"` or `'` for the quotes.

#### Incorrect Usage
```js
console.log("Hello ${name}!");
```

#### Correct Usage
```js
console.log(`Hello ${name}!`);
```

[View rule on ESLint.org](https://eslint.org/docs/rules/no-template-curly-in-string#top)

### Disallow Confusing Multiline Expressions
This rule disallows confusing multiline expressions where a newline looks like it is ending a statement, but is not.

#### Incorrect Usage
```js
const foo = bar
(1 || 2).baz();
```

#### Correct Usage
```js
const foo = bar;
(1 || 2).baz();
```

[View rule on ESLint.org](https://eslint.org/docs/rules/no-unexpected-multiline#top)

### Disallow Unreachable Code After `return`, `throw`, `continue` and `break` Statements
This rule disallows unreachable code after `return`, `throw`, `continue`, and `break` statements.

#### Incorrect Usage
```js
function foo() {
    return "bar";

    console.log("Hello!");
}
```

#### Correct Usage
```js
function foo() {
    console.log("Hello!");

    return "bar";
}
```

[View rule on ESLint.org](https://eslint.org/docs/rules/no-unreachable#top)

### Require Calls To `isNaN()` When Checking For `NaN`
This rule disallows comparisons to `NaN`.

#### Incorrect Usage
```js
if (foo == NaN) {
    doSomething();
}
```

#### Correct Usage
```js
if (isNaN(foo)) {
    doSomething();
}
```

[View rule on ESLint.org](https://eslint.org/docs/rules/use-isnan#top)

### Enforce Comparing `typeof` Expressions Against Valid Strings
This rule enforces comparing `typeof` expressions to valid string literals.

#### Incorrect Usage
```js
typeof foo === "strnig"
```

#### Correct Usage
```js
typeof foo === "string"
```

[View rule on ESLint.org](https://eslint.org/docs/rules/valid-typeof#top)
