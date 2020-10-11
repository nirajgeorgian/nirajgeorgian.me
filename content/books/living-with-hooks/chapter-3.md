# useState

let's get started with one simple example and we will work upon it as we move forward.

```javascript
const [username, setUsername] = useState < string > ''
```

here we have imported useState from react and while calling useState we pass strong type as what type of value we need to store.
it can be of any type like numbers, string, boolean which are primitive types or it can be complex type where we define the type using type or interface typescript keyword or directly passing it into these <> boxes.

let's check for a complex type

```javascript
interface ITheme {
  dark: string
  light: string
  isDark: boolean
}
const [username, setUsername] = useState<ITheme>({
  dark: '#fff',
  light: '#000',
  isDark: true
})
```

there are cases when we need to have an empty state and while calculating we need to update the state so in that we can start with an empty value.
let's come back to our original useState where we were storing username and let's say after making some network call we need to update the username and to get started we need null as initial value

// rules of hooks
// order of hooks
