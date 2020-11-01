---
slug: react-hooks-useReducer
title: React Hooks - useReducer
date: 2020-10-19
author: niraj georgian
description: ''
categories:
  - react
  - hooks
keywords:
  - javascript
  - functional component
banner: './images/aron-visuals.jpeg'
bannerCredit: 'Photo by [Aron Visuals](https://unsplash.com/@aronvisuals)'
draft: true
---

Reducer's are not new to react as it all started with redux and community loved it so much that react team build out an entire hook based on this pattern.

## Pure Function

A Pure Function is a function whose output is determined by it's input and it does not perform any side effect.
We can compare pure function with math's function as it takes an input and gives us the same output for same input.
for example: sum(a, b) and if we pass 2 in place of a and 4 in place of b it will always return 6 as output no matter how many times we call it.
Based upon pure function concept, we formed redux where we have one central store and to update that central store, we dispatch action and actions are attached to reducers which update store based on types which ultimately update the UI.

## Redux

redux run's on three principal

- The **State**, which is the source of truth that derives the data for the app.
- The **Action**, an event that occurs in the app which is responsible for updating the state
- The **Reducer**, is a pure function which update the state based on action.
  This cycle keep going on as on every action emitted, run a reducer which will update the store state and which is binded to UI, which will update the app UI.

## Reducer

Reducer comes for [Array.reduce](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce) method of javascript, which run on array input and it target every single element in the array and return one combined value based upon the operation you perform.
the systax is below:

```js {numberLines}
const array_one = [1, 2, 3, 4, 5]

// this function act's as a reducer and henece it will run on every element of the array.
const reducer = (accumulator, currentValue) => accumulator + currentValue

const result = array_one.reduce(reducer)
console.log(result) // 1 + 2 + 3+ 4 + 5
// expected output: 10
```
