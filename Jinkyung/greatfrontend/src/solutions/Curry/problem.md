# Curry Function Implementation

## Description

Currying is the technique of converting a function that takes multiple arguments into a sequence of functions, where each function takes a single argument.

Your task is to implement a `curry` function.

The `curry` function:
- Accepts a function as its only argument
- Returns a new function
- The returned function can be called repeatedly with **single arguments**
- Once the total number of provided arguments is **at least the number of parameters of the original function**, the original function should be invoked with all collected arguments
- The result of the original function should then be returned

---

## Function Signature

```js
function curry(func) {}# Curry Function Implementation

## Description

Currying is the technique of converting a function that takes multiple arguments into a sequence of functions, where each function takes a single argument.

Your task is to implement a `curry` function.

The `curry` function:
- Accepts a function as its only argument
- Returns a new function
- The returned function can be called repeatedly with **single arguments**
- Once the total number of provided arguments is **at least the number of parameters of the original function**, the original function should be invoked with all collected arguments
- The result of the original function should then be returned

---

## Function Signature

```js

function add(a, b) {
  return a + b;
}

const curriedAdd = curry(add);

curriedAdd(3)(4); // 7

const alreadyAddedThree = curriedAdd(3);
alreadyAddedThree(4); // 7
```

```js
function multiplyThreeNumbers(a, b, c) {
  return a * b * c;
}

const curriedMultiplyThreeNumbers = curry(multiplyThreeNumbers);

curriedMultiplyThreeNumbers(4)(5)(6); // 120

const containsFour = curriedMultiplyThreeNumbers(4);
const containsFourMulFive = containsFour(5);
containsFourMulFive(6); // 120
```