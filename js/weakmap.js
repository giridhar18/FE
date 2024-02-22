// WeakMap, WeakRef, WeakSet, FinalizationRegistry
// IMPORTANT


// In JavaScript, `WeakMap` is a built-in object that provides a collection of key-value pairs in which the keys must be objects and the values can be arbitrary values. `WeakMap` is similar to `Map` but with a few key differences:

// 1. Keys must be objects: Unlike regular maps, `WeakMap` only accepts objects as keys and cannot store primitive data types (like strings or numbers) as keys.
// 2. Weakly held: Unlike a regular `Map`, a `WeakMap` holds its keys weakly. This means that if there are no other references to a key stored in a `WeakMap`, the key is eligible for garbage collection, which allows memory to be freed up.

// `WeakMap` provides the following methods:
// 1. `get(key)`: Returns the value associated with the key, or `undefined` if the key does not exist in the map.
// 2. `set(key, value)`: Sets the value for the specified key in the `WeakMap`.
// 3. `has(key)`: Returns a Boolean indicating whether an element with the specified key exists in the `WeakMap`.
// 4. `delete(key)`: Removes the entry for the specified key from the `WeakMap`.

// Here is a simple example demonstrating the use of `WeakMap`:
let wm = new WeakMap();
let key1 = {};
let key2 = {};
wm.set(key1, 'value1');
wm.set(key2, 'value2');
console.log(wm.get(key1)); // Output: value1
wm.delete(key1);
console.log(wm.has(key1)); // Output: false

// It's important to note that the keys of a `WeakMap` cannot be iterated or counted, which means there is no method to retrieve all the keys or check the size of the `WeakMap`. `WeakMap` is commonly used in scenarios where you want to associate data with objects without causing memory leaks or preventing the garbage collector from freeing memory.

//
// Non registered symbols are allowed as keys in WeakMap, weakref, weakset, FinalizationRegistry
// registered symbol = symbol.keyFor(symbol.for('my_key')) === 'my_key'