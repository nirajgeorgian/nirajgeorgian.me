# typescript

To work with any program, we need to store data and to store data we need to know about the data type so that we know what are we storing.

## typescript is superscript of javascript means every javascript code is a valid typescript code

typescript provide's us with some basic type

> Booleans
> Strings
> Numbers
> null
> undefined
> Symbols (new in ECMAScript 2015)

```javascript
true
;('hello')
3.14
null
undefined
```

or we can use the constructire one

```javascript
new Boolean(false)
new String('world')
new Number(42)
```

> Boolean

```typescript
let isDark: boolean = false
```

here we have explicitly told typescript compiler that we are creating a variable named isDark which is of type boolean so it will only store boolean type data and at the same time we are also assigning it a default value as false.But if we are also assigning default values we can omit the typings for simple type. so the above can be rewritten as

```typescript
let isDark = false
```

the typescript compiler will automatically know that the variable defined as isDark is of boolean type because we also assigned it a default boolean value of false.

> Number

```typescript
let decimal: number = 6
let hex: number = 0xf00d
let binary: number = 0b1010
let octal: number = 0o744
let big: bigint = 100n
```

all typescript numbers values are either floating point values or BigIntegers. most developers prefer to use numbers only but when we are dealing with large number values we can use BigIntegers.The types for these are `number` and `biginit`.In addition to hexadecimal and decimal literals, TypeScript also supports binary and octal literals introduced in ECMAScript 2015.

> String

```typescript
let name: string = 'dododuck'
```

typescript does not support character type specifically. typescript stores every string type values as string which can be written using '' single quotes or "" double quotes.Apart from storing string, typescript also supports string literal intriduced in ES6 where we can write multiline string or we can concatenate multiple values with strings.

```typescript
let firstName: string = 'dodo'
let lastName: string = 'duck'

let sentence = `My full name is ${dodo} ${duck}.`
console.log(sentence) // My full name is dodo duck.

let multiLine = `
my name is
dodo
duck
`
```

> Array

previously, we learned about primitive or simple data type which stores value of a certain kind but we need to store more than one value or a collection of values and for that we need arrays.
We can construct arrays in typescript using two format

```typescript
const list_one: number[] = [1, 2, 3, 4, 5]
const list_two: Array<number> = [1, 2, 3, 4, 5]
```

> Enum

enums helps us to give names to a constant number values.by default names associated with enums start with a number value of 0, but we can change that by setting the value by ourself.

```typescript
enum STAGES = {
  SUCCESS
  FAILURE
}

const result: STAGES = STAGES.SUCCESS
```

enums with changed index value

```typescript
enum STAGES = {
  SUCCESS = 1
  FAILURE
}

const result: STAGES = STAGES.SUCCESS
```

enum can also be used to look for the value using the numeric value assigned to it.

```typescript
enum STAGES = {
  SUCCESS = 1
  FAILURE
}

const result: string = STAGES[1]
console.log(result) // "SUCCESS"
```
