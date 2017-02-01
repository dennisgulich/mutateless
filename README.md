# Mutateless
Mutateless is a small utility module which provide a bunch of functions for working with immutable data structures.
Instead of polluting or changing the way you work with your objects, we designed the functions to work on regular
objects, lists and nested data structures of any kind.

### Installation
```
yarn add mutateless
```

### Examples

Lets start by looking at `assign`, which acts almost like `Object.assign`:
```javascript
const todo = {
  title: 'sleep', 
  checked: false,
  notes: ['Go to bed before midnight']
}

const modifiers = {
  checked: true,
  notes: notes => [...notes, 'another note']
}

assign(modifiers, todo) // => new object with with a second note
```
We first pass in the properties we want to modify, each property can either be a value or a modifier function.
The modifier function will receive the original value and should return the new value. You will soon see why we 
received the original value but first lets take a look at another function called `add`:

```javascript
add(4, [1,2,3]) // => [1,2,3,4]
```
`add` will return a new list with the appended value. But `add` is also a curried function, if we only pass in
the first parameter we will receive a new function which accepts the second parameter. 
Lets combine `assign` and the curried `add`:
```javascript
assign({notes: add('another note')}, todo) // => new object with with a second note
```
Which is the equivalent as writing:
```javascript
assign({notes: notes => add('another note', notes)}, todo) // => new object with with a second note
```

`remove` can be used to remove items matching a reference or a predicate:
```javascript
assign({notes: remove('another note')}, todo) // => new object with without the second note
```
modifying a nested object works the same way:
```javascript
const article = {
  // ...
  author: {
    // ...
    username: 'jack.bauer'
  }
}

assign({author: assign({username: 'kiefer.sutherland'})}, article) // => new article with updated author.username
```

`mutateless` contains a some generic and useful predicates to help you write more readable and predictable code. 

Lets take a look at the `match` predicate:
```javascript
const todos = [
    {title: 'Bake cake', checked: true},
    {title: 'Eat cake', checked: false},
    {title: 'Profit', checked: false},   
]

const unchecked = match({checked: false}) 

replace(unchecked, assign({checked: true}), todos) // => check all elements
```
and the here is `last` predicate:
```javascript
remove(last, todos) // => new list without the last item
```

For more examples read the tests or the documentation

### License

MIT
