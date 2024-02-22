// In JavaScript, objects are subject to garbage collection when they are no longer reachable. To prevent an object from being garbage collected, you can ensure that there is still a reference to the object in memory. One way to achieve this is by storing the object in a long-lived data structure, such as a global variable, a closure, or a data structure that persists for the lifetime of your application.

// Here's an example demonstrating how to store an object in a global variable to prevent it from being garbage collected:

// Storing an object in a global variable
let globalObject = { data: 'example data' };
// Using the globalObject in your application
console.log(globalObject.data); // Output: example data
// Even if the function execution is completed, the globalObject still exists and is not garbage collected


// By storing the object in a global variable, the object remains accessible as long as the variable is in scope. However, be cautious when using global variables, as they can lead to potential issues such as naming conflicts and unintended modification from different parts of your code.

// You can also store the object within a closure or in a long-lived data structure that persists for the lifetime of your application, depending on your specific use case. The key is to ensure that there is always a reference to the object that prevents it from being garbage collected.