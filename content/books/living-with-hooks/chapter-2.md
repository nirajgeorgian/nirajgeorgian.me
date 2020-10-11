design a simple component to store single value.
useState

- simple argument
- function with previous value
- ex: const [count, setCount] = React.useState(0); const increment = () => setCount(c => c + 1)
- function with heavy computations
- test it

---

title: React State Management With Context API
slug: react-context-state-management
author: niraj georgian
description: 'state management for react'

---

// outline

- useState
  - use case
  - example
- useEffect
  - use case
  - example
- combine useState with useEffect
- create custom hooks

## React State Management

With each passing day, we see many new frontend libraries coming into practices. things all started with JQuery and now we are here today, where we have react angular, vue, ember etc.
and all these libraries have few things in common, that they all operate on component level. in every other frontend framework we have different option to create application but using components only.
when you work with few components it's easy to manage them and keep track of what other components are doing and how they are behaving to external/internal changes. but think of a situation where you have
100 of components then it is quite complicated to keep tract of how it is behaving with other components and to solve this we manage their own state in some of state management solutions.

react a big picture
when it comes to react managing states in react is simple for small application and again simple for large application but for that we need to know few things
1: react
2: react hooks
3: react context api

react can have local states as well as application level global states
for your local states you can only use hooks to manage it an dit's quite simple.
let's check an example below for managing username information in input filed

but how can we store state in react.
In React, you use special functions called "hooks" to do this. React hooks can help us to store the state and manage them. few hooks are

- React.useState
- React.useEffect
- React.useContext
- React.useRef
- React.useReducer

```js {numberLines}
import React, { useState } from 'react'

export default function Theme() {
  const [theme, setTheme] = useState('dark')

  const toggleTheme = () => {
    if (theme === 'dark') {
      setTheme('light')
    } else {
      setTheme('dark')
    }
  }

  return (
    <div>
      <p>the current theme is {theme}</p>
      <button onClick={toggleTheme}>toggle theme</button>
    </div>
  )
}
```

here we can see that on line no: 2 we are using react useState hook to store the value of theme. this hook returns us two things the actual value of the state and an function to change it.
the change function accept's a value or a function where we can return the computed value.
so on line no. 8 and line no. 9 we can see that we are using the setState to change the value of theme and as soon as some state values are being changed, react rerenders it instanstingly.
there another way also to initialize the state as with `lazy state initialization` where rather than passing a value, we pass an function which computes the value and return it.

```js {numberLines}
const [theme, setTheme] = React.useState(() => localStorage.getItem('theme'))
```

but the localStorage computation function, it can be easily replaced with any expensive computation function and it will work without compromising on react performance.

but what next i can store the value and now if i can store the value i can probably pass the value as props and it will still be available to other components. but what if those values are updated. How will my component respond to those changes.
probably we can use `React.useEffect` to run some logic when our component mounts but unlike `React.useState` it does not return any value. so the return type of this function is `null`.

but what if you components are 4-5 level deep. passing props to all the intermediate components can become a mess so we can use a central place to store the value and ask for the value whenever we need and pass a value whenever we need to update it and as soon as the value is updated every component who is using it will be notified and they get's updated.
but the next questions is how ?

we can use redux or recoil or bla bla bla ....
theere exist a ton's of state management solution for react and almost every state mangement solution kind of solve the same problem but in a slightly diffrent way.
but if you see react, we don't need any state

```js {lineNumber}
import React from 'react'

// code form: https://usehooks.com/useLocalStorage/
function useLocalStorage(key, initialValue) {
  // State to store our value

  // Pass initial state function to useState so logic is only executed once

  const [storedValue, setStoredValue] = useState(() => {
    try {
      // Get from local storage by key
      const item = window.localStorage.getItem(key)
      // Parse stored json or if none return initialValue
      return item ? JSON.parse(item) : initialValue
    } catch (error) {
      // If error also return initialValue
      console.log(error)
      return initialValue
    }
  })

  // Return a wrapped version of useState's setter function that ...
  // ... persists the new value to localStorage.
  const setValue = (value) => {
    try {
      // Allow value to be a function so we have same API as useState
      const valueToStore =
        value instanceof Function ? value(storedValue) : value
      // Save state
      setStoredValue(valueToStore)
      // Save to local storage
      window.localStorage.setItem(key, JSON.stringify(valueToStore))
    } catch (error) {
      // A more advanced implementation would handle the error case
      console.log(error)
    }
  }

  return [storedValue, setValue]
}
```
