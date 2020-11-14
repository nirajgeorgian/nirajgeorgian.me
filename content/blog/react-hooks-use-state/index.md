---
slug: react-hooks-use-state
title: React Hooks - useState
date: 2020-10-11
author: niraj georgian
description: 'With each passing day, we see many new frontend libraries coming into practices. All major frontend development started with JQuery and today we are here, where we have React, Angular, Vue, Ember etc. and all these libraries have few things in common, that they all operate on component level. In every other frontend framework we have different option to create application but the underlying principle is using components only.'
categories:
  - react
  - hooks
keywords:
  - javascript
  - functional component
banner: './images/aron-visuals.jpeg'
bannerCredit: Photo by Aron Visuals
creditLink: https://unsplash.com/@aronvisuals?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText
---

With each passing day, we see many new frontend libraries coming into practices. All major frontend development started with [JQuery](https://jquery.com/) and today we are here, where we have [React](https://reactjs.org/), [Angular](https://angular.io/), [Vue](https://vuejs.org/), [Ember](https://emberjs.com/) etc.
and all these libraries have few things in common, that they all operate on component level. In every other frontend framework we have different option to create application but the underlying principle is using components only.

## Components - A Bigger Picture

Components driven development is one of the most essential principals in frontend development as it helps us to break down a complex application into smaller reusable chunks of logic and then let us glue all those small pieces together to form a complex and customisable application.
We can think of components as atomic units of frontend development which can exist on its own and application are composed of many such small atomic level components.

Let's take an example application where we need to create a small user review form.
We may break it down as such:

**username** :- responsible for storing the user name as who is submitting the form<br>
**feedback** :- responsible for storing the feedback of the customer/client<br>
**button** :- button will help us to submit the form

When working with any frontend library or framework we can split these into its own managed components and we can have a structure where we have 2 small files responsible for username and feedback section and these two have their values stored in them.

```bash {numberLines}
parent folder
.
├── components
│   ├── feedback.js
│   └── username.js
└── user-review.js
```

Here we can see we have created two files inside components directory; one is responsible for taking feeback and the other one is responsible for username.
We assemble all the above two small components and combine them into `user-review.js` to form a complete user form which can then be showed to the browser.
When you work with few a components it's easy to manage them and keep track of what other components are doing and how they are behaving to external/internal changes. Now think of a situation where you have 100's of component, then it is quite complicated to keep track of how it is behaving with other components and to solve this we manage their own state in some of state management solutions.

## React - functional hooks

We can create an react component using class component and functional component but as functional components are light and easy to use, we will stick to it.
Functional componens don't have the `setState` flexibility of its Class counterpart, so we use react hooks to manage our state. React provides various hooks out of the box to manage the component state to various lifecycle stages in functional components.

What is a Hook? A Hook is a special function that lets you [“hook into” React features](https://reactjs.org/docs/hooks-state.html)
Few official react hooks are:

- useState :- The State Hook lets you add React state to functional components.
- useEffect :- The Effect Hook lets you perform side effects in functional components.
- useReducer :- The Reducer Hook lets you define state in the redux way using actions and let you dispatch them.
- useMemo :- The Memo Hook lets you return a [memoized](https://en.wikipedia.org/wiki/Memoization) value.
- useCallback :- The Callback Hook lets you return a [memoized](https://en.wikipedia.org/wiki/Memoization) callback

## useState : Our First Hook

We can use the useState hook from inside any functional component to store any state variable. The useState API returns two variable as an array. The first of the two is the actual value(state variable) and the second indexed value is a function which acts as a setter to update the state value.

```js {numberLines}
const [example, setExample] = React.useState(initialValue)
```

We can see that the return value is an array and not a variable. It's called array destructuring.<br>
The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.<br>
below is an small snippet from [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)

```js {numberLines, 2, 10}
let a, b, rest
;[a, b] = [10, 20]

console.log(a)
// expected output: 10

console.log(b)
// expected output: 20
;[a, b, ...rest] = [10, 20, 30, 40, 50]

console.log(rest)
// expected output: Array [30,40,50]
```

so using array destructuring, we extracted out the example and setExample value from it's returned value.
although the state initialization can vary but to make things simple let's just pass an initial value of empty in the below example to see how to store value in username component.

```js {4, 9,numberLines}
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

here we can see that on the highlighted line we are using React useState hook to store the value of username. This hook returns us two things the actual value of the state and an function to change it.
The change function accepts a new value or a function where we can compute the new value and return it, which will in turn get assigned to the state variable.
On line 9, we can see that we have an onChange props which updates the state based on every input change. We can see that on setUsername we are calling it with the updated input element value.
That's all there is to it. We can simply create a state with useState, read the value as needed and updated it whenever we need.
Let us move one step further. We have our initial small application where user can type their username and it get's updated in store. Now we want to store it for future reference too, so probably it's a nice idea to store it in local storage on form submit and read initial value from it.
Let's add one more field for comment and a button for form submission.
On form submit, we will try to check the value in console for now.

```js {lineNumber, diff}
import React from 'react'

export default function App() {
+  const [comment, setComment] = React.useState('')
  const [username, setUsername] = React.useState('')

+  const onFormSubmit = (event) => {
+    event.preventDefault()
+    console.log('values are: ')
+  }

  return (
    <div>
    <p>current username is: {username}</p>
+     <form onSubmit={onFormSubmit}>
        <input onChange={({ target }) => setUsername(target.value)} />
+       <br />
+       <textarea onChange={({ target }) => setComment(target.value)} />
+       <br />
+       <button type="submit">Submit</button>
+     </form>
    </div>
  )
}
```

After rendering it on UI, when we type dodo as username and duck as comment, we will see that on console we have a value printed which says: `values are: dodo, duck`.
Now on form submit we want to store the username in local storage, so let's do that:

```js {lineNumber}
const onFormSubmit = (event) => {
  event.preventDefault()
  window.localStorage.setItem('username', JSON.stringify(username))
  console.log(`values are: ${username}, ${comment}`)
}
```

here we are using localStorage.setItem to set the value in localStorage, which we can read later when when we want to.
One usecase might be to read the value from local storage on application load and if any value exis we assign that value as initial value to our username state or we will initialize our state with empty string.
But we don't have any lifecycle methods in functional component to let React know we need to fire some event on application load; here comes useEffect hook into the picture. The useEffect hook let's you fire any event on app renders or event when any value on its dependency array changes.
We will dive deep into useEffect in any other article but to make things simple, we can just pass an empty array as second argument to useEffect and it will run only once when the component renders/loads.
Unlike useState which returns us two values, useEffect does not return anything, its return type is null.
Here's how it's being used.

```js {lineNumber}
function ExampleComponent() {
  // useState for your states

  React.useEffect(() => {
    // perform some computations here and assign it to state
  }, []) // this empty array will make sure that it runs only which the component renders/loads
}
```

so we can refactor our code as below:

```js {lineNumber, diff}
import React from 'react'

export default function App() {
  const [comment, setComment] = React.useState('')
  const [username, setUsername] = React.useState('')

+  React.useEffect(() => {
+    const storedUsername = localStorage.getItem('username')
+    if (storedUsername) {
+      setUsername(JSON.parse(storedUsername))
+    }
+  }, [])

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

Here we are passing a function to useEffect and inside that function we first check for username key in local storage and if we have a value, we use setUsername to assign the value back to the username state.
This way the user can see their username as nitial value in the username field so that user does not have to type again and again and on each consecutive save. We will update the localStorage with the new value when user clicks on submit.

One step down, now what if we need multiple keys to store inside localStorage we have to repeat this process again and again, so what we can do is that, we can wrap the common functionality into one custom hook and use it wherever we need.
I'm not going to explain how to create custom hooks for now, but we can use some prebuild hooks from opensource community. One such hook is `useLocalStorage`.

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
      console.error(error)
      return initialValue
    }
  })

  // Return a wrapped version of useState's setter function that it ...
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

What this hook does is that it accepts a key and a default value to return if no value was set in local storage.
In the return statement, we have two values combined similar to the useState API, the first key the actual value itself and the second value to set the value to local storage.
with this hook in place our code will get reduced and we have more reusability.

```js {lineNumber, diff}
import React from 'react'
+ import { useLocalStorage } from './use-local-storage'

export default function App() {
  const [comment, setComment] = React.useState('')
-  const [username, setUsername] = React.useState('')
+  const [username, setUsername] = useLocalStorage('username', '')

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

Give enough though as to what to store in core useState state and what we can derive from custom hooks.
setState works really well for small state store and for local state management, but if we want to make the state available across the application, then probably we have to use some other hooks, maybe useReducer along with react context API.
for further reading, check out the official [react docs](https://reactjs.org/docs/hooks-state.html). It is very well written and easy to understand
