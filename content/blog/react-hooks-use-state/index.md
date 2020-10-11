---
title: React Hooks - useState
slug: react-hooks-useState
author: niraj georgian
description: 'With each passing day, we see many new frontend libraries coming into practices. All major frontend development started with JQuery and today we are here, where we have React, Angular, Vue, Ember etc. and all these libraries have few things in common, that they all operate on component level. In every other frontend framework we have different option to create application but the underlying principle is using components only.'
date: '2020-10-11'
image: 'assets/images/useState.png'
---

With each passing day, we see many new frontend libraries coming into practices. All major frontend development started with [JQuery](https://jquery.com/) and today we are here, where we have [React](https://reactjs.org/), [Angular](https://angular.io/), [Vue](https://vuejs.org/), [Ember](https://emberjs.com/) etc.
and all these libraries have few things in common, that they all operate on component level. In every other frontend framework we have different option to create application but the underlying principle is using components only.

## Components - A Bigger Picture

Components are essentials for frontend development as it help's us to break down a bigger application into smaller reusable application and then let us glue all those small pieces together to form a big and complex application.
We can think of component as basic atomic unit of frontend development which can exist on it's own. and application are build composed of many small such atomic level components.
Let's take an example application where we need to create a small user review form.
things we require for this form may include:

> **username** :- responsible for storing the user name as who is submitting the form
>
> **comment** :- responsible for storing the complain text
>
> **button** :- button will help us to submit the form

When working with any frontend library or framework we can split these into it's own managed component and we can have a structure where we have 2 small files responsible for username and comment section and these two have their values stored in them.

```bash {numberLines}
parent folder
.
├── components
│   ├── comment.js
│   └── username.js
└── user-review.js
```

Here we can see we have created two files inside components directory. one is responsible for comment and other one is responsible for username.
we assemble all the above two small components and combine them into `user-review.js` to form a complete user form which can then be showed to the browser.
when you work with few components it's easy to manage them and keep track of what other components are doing and how they are behaving to external/internal changes. but think of a situation where you have
100's of component, then it is quite complicated to keep tract of how it is behaving with other components and to solve this we manage their own state in some of state management solutions.

## React - functional hooks

we can create an react component using class component and functional component but as functional components are light and easy to use, we will stick to it.
In functional component we don't have the `setState` flexibility so we use react hooks to manage our state. there are many react hooks which comes by default with react and all return different values.

[What is a Hook? A Hook is a special function that lets you “hook into” React features](https://reactjs.org/docs/hooks-state.html)
Few official react hooks are:

> - useState :- The State Hook lets you add React state to function components.
>
> - useEffect :- The Effect Hook lets you perform side effects in function components.
>
> - useReducer :- The Reducer Hook lets you define state in redux way using actions and let you dispatch them.
>
> - useMemo :- The Memo Hook lets you return a [memoized](https://en.wikipedia.org/wiki/Memoization) value.
>
> - useCallback :- The Callback Hook lets you return a [memoized](https://en.wikipedia.org/wiki/Memoization) callback

## useState : Our First Hook

we can use useState from inside any functional component to store any value. on use of useState, it returns two variable as array. first index values is the actual value and the second indexed value is a function which acts as a setter to update the state value.

```js {numberLines}
const [example, setExample] = React.useState('initialValue)
```

although the state initialization can vary but to make things simple let's just pass an initial value of empty in the below example to see how to store value in username component.

```js {numberLines}
import React from 'react'

export default function App() {
  const [username, setUsername] = React.useState('')

  return (
    <div>
      <p>current username is: {username}</p>
      <input onChange={({ target }) => setUsername(target.value)} />
    </div>
  )
}
```

here we can see that on the highlighted line we are using react useState hook to store the value of username. This hook returns us two things the actual value of the state and an function to change it.
The change function accept's a value or a function, where we can computed the value and return it which will get assigned to the state.
on line 9, we can see that we have an onChange props which let's us update the state based on every input change. we can see that on setUsername we are calling it with the updated input element value.
and that's it. it's that simple. You create a state with useState, read the value as needed and updated it whenever we need.
but let us move one step further. Now we have our initial small application where user can type their username and it get's updated in store. but we want to store it for future reference also, so probably it's a nice idea to store it in local storage on form submit and read initial value from it.
As we will now store the username value in local storage for future reference,let's add one more field for comment and a button for form submission.
On form submit, we will try to check the value in console for now.

```js {lineNumber}
import React from 'react'

export default function App() {
  const [comment, setComment] = React.useState('')
  const [username, setUsername] = React.useState('')

  const onFormSubmit = (event) => {
    event.preventDefault()
    console.log('values are: ')
  }

  return (
    <div>
      <form onSubmit={onFormSubmit}>
        <input onChange={({ target }) => setUsername(target.value)} />
        <textarea onChange={({ target }) => setComment(target.value)} />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
```

After rendering it on UI, and when we type dodo on input and duck on comment, we will see that on console we have a value printed which says: `values are: dodo, duck`.
Now on form submit we want to store the username in local storage, so let's do that

```js {lineNumber}
const onFormSubmit = (event) => {
  event.preventDefault()
  window.localStorage.setItem('username', JSON.stringify(username))
  console.log(`values are: ${username}, ${comment}`)
}
```

here we are using localStorage.setItem to set the value in localStorage, which we can read later when when we should read.
May be from my point of view, when application loads, then it's the good time to read the value from local storage and see if any value exist, then we assign that value as initial value to username or we will initialize our state with empty string.
But we don't have any lifecycle methods in functional component, so how can we fire some event on app load, here comes useEffect hook into picture, which let's you fire any event on app renders or event when any value changes.
We will dive deep into useEffect in any other article but to make things simple, we can just pass an empty array as second argument to useEffect and it will run only once on app load.
as useState returns us two values, useEffect does not return anything, it's return type is null.
Here's how it's being used.

```js {lineNumber}
function ExampleComponent() {
  // useState for your states

  React.useEffect(() => {
    // perform some computations here and assign it to state
  }, []) // this empty array will make sure that it runs only on app load
}
```

so we can refactor our code as below:

```js {lineNumber}
import React from 'react'

export default function App() {
  const [comment, setComment] = React.useState('')
  const [username, setUsername] = React.useState('')

  React.useEffect(() => {
    const storedUsername = localStorage.getItem('username')
    if (storedUsername) {
      setUsername(JSON.parse(storedUsername))
    }
  }, [])

  const onFormSubmit = (event) => {
    event.preventDefault()
    window.localStorage.setItem('username', JSON.stringify(username))
    console.log(`values are: ${username}, ${comment}`)
  }

  return (
    <div>
      <form onSubmit={onFormSubmit}>
        <input
          value={username}
          onChange={({ target }) => setUsername(target.value)}
        />
        <br />
        <textarea
          value={comment}
          onChange={({ target }) => setComment(target.value)}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
```

here we can see that, we are passing an function to useEffect and inside that function, we first check for value in local storage and if we have the value, we use setUsername to assign the value back to the username state.
and inside our html we use value props to show initial value inside the field so that user does not have to type again and again and on each consecutive save, we will again update the localStorage with the updated value.

One step down, think where we need multiple keys to store inside localStorage we have to repeat this process again and again, so what we can do is that we can wrap the common functionality into one custom hook and use it wherever we need.
I'm not going to explain how to create custom hooks now but, we can use some prebuild hooks from open community. one such hook is `useLocalStorage`.

```js {lineNumber}
// code form: https://usehooks.com/useLocalStorage/
import React from 'react'

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

what this hook does is that it accepts a key and a default value to return if no value was set in local storage.
In the return statement, we have two values combined same like useState as return value, the first key the actual value itself and the second value to set the value to local storage.
with this hook in place our code will get reduced and we have more reusability.

```js {lineNumber}
import React from 'react'
import { useLocalStorage } from './use-local-storage'

export default function App() {
  const [comment, setComment] = React.useState('')
  const [username, setUsername] = useLocalStorage('username', '')

  React.useEffect(() => {
    const storedUsername = localStorage.getItem('username')
    if (storedUsername) {
      setUsername(JSON.parse(storedUsername))
    }
  }, [])

  const onFormSubmit = (event) => {
    event.preventDefault()
    window.localStorage.setItem('username', JSON.stringify(username))
    console.log(`values are: ${username}, ${comment}`)
  }

  return (
    <div>
      <form onSubmit={onFormSubmit}>
        <input
          value={username}
          onChange={({ target }) => setUsername(target.value)}
        />
        <br />
        <textarea
          value={comment}
          onChange={({ target }) => setComment(target.value)}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
```

## Conclusion

setState works really well for small state store and for local state management, but if we want to make the state available across the application, then probably we have to use some other hooks, maybe useReducer along with react context API.
