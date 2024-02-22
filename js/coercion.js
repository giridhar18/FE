// In JavaScript, although string, number, and boolean primitive values do not have methods or properties of their own, JavaScript automatically coerces them to their corresponding object wrapper types when you attempt to access a property or method on them. This process is known as autoboxing or implicit coercion.

// For example, when you attempt to call a method on a string primitive, JavaScript automatically coerces the string primitive to a `String` object. This allows you to access the prototype methods of the `String` object. Similarly, for number and boolean primitives, JavaScript coerces them to their corresponding object wrapper types (`Number` and `Boolean`, respectively).

// Here's an example showing how a string primitive can access prototype methods:
const strPrimitive = 'Hello, world!';
const strObject = new String('Hello, world!');
console.log(strPrimitive.toUpperCase()); // Output: HELLO, WORLD!
console.log(strObject.toUpperCase()); // Output: HELLO, WORLD!

// In this example, both the `strPrimitive` and `strObject` can access the `toUpperCase()` method, even though `strPrimitive` is a string primitive and `strObject` is a `String` object. This is because JavaScript automatically converts the primitive to an object when you attempt to access a property or method on it. However, it is important to note that the `strPrimitive` itself remains a primitive value and does not have access to the prototype methods of the `String` object.