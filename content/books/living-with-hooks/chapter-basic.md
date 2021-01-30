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
