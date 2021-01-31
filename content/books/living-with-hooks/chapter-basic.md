What is a component.

React is a very popular and mature framework which started with all the best features of modern javascript and it allowed us to create reusable components with modern javascript features like classes, constructor etc.
but it kind of became a pain to code with classes for too long and react team decided to provide an entire ecosystem around component creation with only javascript functions.

basic react component with old style

```
import React from 'react'

class BasicComponent extends React.Component {
	render() {
		return (
			<div>
				<p>basic class component</p>
			</div>
		)
	}
}
```

The only method which react requires with class component is render method and apart from this all other methods are optional.
Inside the render method, it accept one valid parent html element or any other react component and rest inside it as child.
ex:

```js
// 	(
//		<div> // <- this is the top level element
//			<p>here goes some description</p>
//		</div>
//	)
```

we can't have two div adjacent to each other in the render method as react does not render array, but there are places where we don't need any extra div element so in order to solve that problem, we use fragment from react.
so now, if in the BasicComponent, if we don't need that top most div and just want to render p element along with some other element adjacent to it, we do do it like below

```
import React, {Fragment} from 'react'

class BasicComponent extends React.Component {
	render() {
		return (
			<Fragment>
				<p>basic class component</p>
				<p>other adjacent element</p>
				<img src="http://example.com/dodo" />
			</Fragment>
		)
	}
}
```
