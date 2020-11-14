---
slug: react-hooks-use-reducer
title: React Hooks - useReducer
date: 2020-11-14
author: niraj georgian
description: 'Reducers are not new to react as it all started with redux and community loved it so much that react team build out an entire hook based on this pattern.'
categories:
  - react
  - hooks
keywords:
  - javascript
  - functional component
banner: './images/marc-olivier.jpeg'
bannerCredit: Photo by Marc-Olivier Jodoin
creditLink: https://unsplash.com/@marcojodoin?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText
---

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

## [useReducer](https://reactjs.org/docs/hooks-reference.html#usereducer)

useReducer works on [reducer pattern](https://redux.js.org/basics/reducers). In this pattern all the state is stored in a single object and it's always a good plan to think of state object and keep the state as much flat as possible without having nested keys.
after you decide on the state object write a reducer for that state which is having a structure mentioned below and remember this function is always pure so no side effects are allowed.

```js {numberLines}
// (previousState, action) => nextState
```

So let's use the example of theme switch within an application, when a application can run in two themes along with color properties to use
and let's try to build an app and manage state with useReducer. so let's start with our reducer along with defining our state.

```js {lineNumbers}
// light and dark themes

const themeColours = {
  light: {
    color: '#343434',
    backgroundColor: '#fefefe'
  },
  dark: {
    color: '#fff',
    backgroundColor: '#3f3f3f'
  }
}
const initialState = { theme: 'light' }

function reducer(state, action) {
  switch (action.type) {
    case 'dark':
      return { theme: 'dark' }
    case 'light':
      return { theme: 'light' }
    default:
      throw new Error(`action not supported ${action.type}`)
  }
}
```

so now we can use useReducer in the following way with the initial state and reducer defined.

const [state, dispatch] = useReducer(reducer, initialState);

useReducer accepts a reducer of type (state, action) => newState, and returns the current state paired with a dispatch method. (If you’re familiar with Redux, you already know how this works.)

```js
import React from 'react'

const ThemeApp = () => {
  // define your initial state and reducer for transformation
  const initialState = { theme: 'light' }
  const reducer = (state, action) => {
    switch (action.type) {
      case 'set_dark':
        return { theme: 'dark' }
      case 'set_light':
        return { theme: 'light' }
      default:
        throw new Error(`action not supported ${action.type}`)
    }
  }

  const [{ theme }, dispatch] = React.useReducer(reducer, initialState)

  return (
    <div>
      <p>theme is: {theme}</p>
      <button onClick={() => dispatch({ type: 'set_dark' })}>Set Dark</button>
      <button onClick={() => dispatch({ type: 'set_light' })}>Set Light</button>
    </div>
  )
}
```

People tend to prefer useReducer in place of useState when state becomes complex as it gives more control on the data flow along with how to consume and change the data associated with the states.
useReducer can help us divide a big state into much smaller states and operate upon those smaller updates but serve it as a complete big state.
When application size increase, people go towards using a state management library and no doubt it will solve the problem, but we can build our own mini state management with react context combined with hooks and in that pattern, we mostly use `useReducer` for managing states.
Let's see an full working react example of react useReducer hook

```js
// ThemeContext.js
import React from 'react'

const ThemeContext = React.createContext({ theme: 'light' })
const { Provider, Consumer } = ThemeContext

const ThemeProvider = ({ children }) => {
  // define your initial state and reducer for transformation
  const initialState = { theme: 'light' }
  const reducer = (state, action) => {
    switch (action.type) {
      case 'set_dark':
        return { theme: 'dark' }
      case 'set_light':
        return { theme: 'light' }
      default:
        throw new Error(`action not supported ${action.type}`)
    }
  }

  const themeContext = React.useReducer(reducer, initialState)

  return <Provider value={themeContext}>{children}</Provider>
}

const useTheme = () => {
  const themeContext = React.useContext(ThemeContext)
  if (!themeContext) {
    throw new Error('useTheme must be wrapped in ThemeProvider')
  }

  return contextValue
}

export { ThemeProvider, Consumer as ThemeConsumer, useTheme }
export default ThemeContext
```

```js
// ThemeApp.js
import React from 'react'
import { useTheme } from './ThemeContext'

const ThemeApp = () => {
  const [{ theme }, dispatch] = useTheme()

  return (
    <div>
      <p>theme is: {theme}</p>
      <button onClick={() => dispatch({ type: 'set_dark' })}>Set Dark</button>
      <button onClick={() => dispatch({ type: 'set_light' })}>Set Light</button>
    </div>
  )
}

export default ThemeApp
```

finally wrap your entire code in ThemeProvider to access the value down the line

```js
// App.js
import React from 'react'
import { ThemeProvider } from './ThemeContext'
import ThemeApp from './ThemeApp'

const App = () => {
  ;<ThemeProvider>
    <ThemeApp />
  </ThemeProvider>
}
```

useReducer also accept's an optional third argument which help's s to lazily evaluate the value and return the value which will be assigned to the initial state.

```js
// some network utility file
const fetchInitialTheme = () => ({
  theme: 'light'
})

// you main app file where you need to use useReducer
const initialState = { theme: 'light' }
const reducer = (state, action) => {
  switch (action.type) {
    case 'set_dark':
      return { theme: 'dark' }
    case 'set_light':
      return { theme: 'light' }
    default:
      throw new Error(`action not supported ${action.type}`)
  }
}

const [state, dispatch] = useReducer(reducer, initialState, fetchInitialTheme)
```

## Conclusion

useReducer is same as redux but build right directly into react to provide solution out of the box and it help's us to solve many big problem's when combined with React Context.
