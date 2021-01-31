React makes use of component to build out complex UI and these component talks to each other using props which is short for properties.
One main point regarding react props is that it travels unidirectional, means props travel from parent to child component.
let's start with react class component and then we will move to functional component

```
import React from 'react'

class ChildComponent extends React.Component {
	render() {
		return (
			<div>
				<p>i am child component</p>
				<p>{this.props.name}</p>
			</div>
		)
	}
}

class ParentComponent extends React.Component {
	render() {
		return (
			<div>
				<h2>below is the child component</h2>
				<ChildComponent name="tony" />
			</div>
		)
	}
}
```

we need to pass props as attribute to child element so we can see that we passed `name="tony"` as attribute to `ChildComponent` which will become props and will be available as `this.props.name` inside the component.
`this.props` is always javascript object keys keys and value what to pass to the component as attribute while using it.
it can also contains functions which are bound to parent component and as react data flow is unidirectional, if we want to change some value in parent component we pass function as props down to child component and those child component change the value.
But, before we move to that part, let's take some time to learn about states in react

React has another special build-in object called state, which allow react component to manage their own data.So unlike props, components cannot pass data with state, but they can create and manage it internally.
to add states to class component, we add a constructor method to our component and initialize state with this.state key to whatever state we want our component to start with.
below is an example where we initialize basic component with empty name value and on change of name in text field we update the text value and assign it back to the state object.

```javascript
import React from 'react'

class BasicComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: ''
    }
  }

  onUsernameChange = (event) => {
    this.setState({ username: event.target.value })
  }

  render() {
    const { name } = this.state
    return (
      <div>
        <p>my username is {name}</p>
        <input type="text" name="username" onChange={onUsernameChange} />
      </div>
    )
  }
}
```

here we can see that we have assigned the method `onUsernameChange` to `onChange` which is a type of event. we can say that it's an html event.
All the events in react are represented using camelCase, rather than lowercase and with JSX we can pass a function as the event handler, rather than a string.
here we can see that we have defined a method onChange which accept's an event. We will learn more about these event's in next chapter.

let's look at an example below

```javascript
import React from 'react'

class ChildComponent extends React.Component {
  onChange = (event) => {
    event.preventDefault()
    this.props.onNameChange(event.target.value)
  }

  render() {
    return <input type="text" value={this.props.name} onChange={onChange} />
  }
}

class ParentComponent extends React.Component {
  render() {}
}
```
