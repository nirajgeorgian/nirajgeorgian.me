---
slug: react-events
title: React Events
date: 2021-01-31
author: niraj georgian
description: "In Web development, it's all about operating data when some event happens like, form submit, button clicked, mouse hover but when it comes to handling event's with react, react do it slightly differently. Your event handlers will be passed instances of SyntheticEvent, a cross-browser wrapper around the browser’s native event. It has the same interface as the browser’s native event, including stopPropagation() and preventDefault(), except the events work identically across all browsers."
categories:
  - react
  - hooks
keywords:
  - javascript
  - functional component
banner: './images/federico-beccari.jpg'
bannerCredit: Photo by Federico Beccari
creditLink: https://unsplash.com/@federize?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText
---

In Web development, it's all about operating data when some event happens like form submit, button clicked, mouse hover but when it comes to handling events with react, react does it slightly different.
We create function which respond to events and your event handlers will be passed as an instances of SyntheticEvent, a cross-browser wrapper around the browser’s native event. It has the same interface as the browser’s native event, including `stopPropagation()` and `preventDefault()`, except the events work identically across all browsers.
Handling events with React element is very similar to handling events on DOM elements. But here are a few syntax difference as React events are named using camelCase rather than lowercase and with JSX you pass a function as the event handler rather than a string.
let's say on a button press we want to run a method which does some action.So, we do it like this way.

```javascript {numberLines}
import React from 'react'

const BasicComponent = () => {
  const [accountType, setAccountType] = React.useState('ADMIN')

  const onToggleUsername = () => {
    if (accountType === 'ADMIN') {
      setAccountType('BASIC')
    } else {
      setAccountType('ADMIN')
    }
  }

  return (
    <div>
      <p>Account Type: {accountType}</p>
      <button onClick={onToggleUsername}>Toggle Account Type</button>
    </div>
  )
}
```

Now let's imagine, we don't want button but we want an anchor tag and on press of that anchor tag we want to run our own implementation rather than opening up a new web page which is the default behavior.

```javascript {numberLines, diff}
import React from 'react'

const BasicComponent = () => {
  const [accountType, setAccountType] = React.useState('ADMIN')

  const onToggleUsername = () => {
    if (accountType === 'ADMIN') {
      setAccountType('BASIC')
    } else {
      setAccountType('ADMIN')
    }
  }

  return (
    <div>
      <p>Account Type: {accountType}</p>
-      <button onClick={onToggleUsername}>Toggle Account Type</button>
+      <a href="#" onClick={onToggleUsername}>
+        Toggle Account Type
+      </a>
    </div>
  )
}
```

but now let's say on press of anchor tag, we don't want to open a new web page which is sort of prevent the default behavior of `on press` of aa anchor tag, we can opt and use the event object that is built-in react.
Many framework works but returning false which kind of stop the default behavior of the tag but in react we must specify, that we want to stop the default behavior of event.

```javascript {numberLines, diff}
import React from 'react'

const BasicComponent = () => {
  const [accountType, setAccountType] = React.useState('ADMIN')

  const onToggleUsername = (event) => {
+    event.preventDefault()
    if (accountType === 'ADMIN') {
      setAccountType('BASIC')
    } else {
      setAccountType('ADMIN')
    }
+    console.log('The link was clicked.)
  }

  return (
    <div>
      <p>Account Type: {accountType}</p>
+      <a href="#" onClick={onToggleUsername}>Toggle Account Type</a>
    </div>
  )
}
```

Here above, event refers to synthetic event.React defines these synthetic events according to the W3C spec, so you don’t need to worry about cross-browser compatibility. React events do not work exactly the same as native events. See the [SyntheticEvent](https://reactjs.org/docs/events.html) reference guide to learn more.
There are cases where you need the native browser event and want to operate upon that native event then you can use `nativeEvent` attribute from the event object to get it.
One of the best use case if form submit. when we submit form we don't want our entire page to reload and just want to make a network call and save that data. we can do it in the following way.

```javascript {numberLines}
import React from 'react'

const BasicComponent = () => {
  const [values, setValues] = React.useState({
    username: '',
    password: ''
  })

  const onInputChange = (event) => {
    event.persist()
    setValues((values) => ({
      ...values,
      [event.target.name]: event.target.value
    }))
  }

  const onFormSubmit = (event) => {
    e.preventDefault()
    console.log('form values: ', values)
    // make any async api call
  }

  return (
    <div>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="username" onChange={onInputChange} />
        <input type="password" name="password" />
        <button type="submit">submit</button>
      </form>
    </div>
  )
}
```

Here we have used two event methods `preventDefault` and `persist`.
If you want to access the event properties in an asynchronous way, you should call event.persist() on the event, which will remove the synthetic event from the pool and allow references to the event to be retained by user code and as mentioned above.We cannot return false from an event handler which will no longer stop event propagation. Instead, e.stopPropagation() or e.preventDefault() should be triggered manually, as appropriate.
React normalizes events, so that they have consistent properties across different browsers.

The event handlers below are triggered by an event in the bubbling phase. To register an event handler for the capture phase, append Capture to the event name; for example, instead of using onClick, you would use onClickCapture to handle the click event in the capture phase.

There are many type of events. Few are:
- Clipboard Events 
- Composition Events 
- Keyboard Events 
- Focus Events 
- Form Events
- Generic Events 
- Mouse Events 
- Pointer Events
- Selection Events
- Touch Events
- UI Events
- Wheel Events
- Media Events 
- Image Events
- Animation Events 
- Transition Events

## Conclusion

React pool events to improve performance and events in React are not DOM events but a wrapper around native browser events and works same across all browsers.
