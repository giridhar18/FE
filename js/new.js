// A new object is created. This new object inherits from the prototype of the constructor function.

// The constructor function is called with the newly created object as the value for the this keyword. This allows the constructor to set properties on the newly created object.

// If the constructor function does not explicitly return an object, the new operator implicitly returns the newly created object. If a return statement in the constructor function returns an object, the newly created object is discarded, and the returned object is used instead.

// Example constructor function
function Example() {
    // Create a new object that inherits from Example's prototype.
    const obj = Object.create(Example.prototype);
  
    // Apply the constructor function to the new object.
    const result = Example.call(obj);
  
    // If the constructor function returns an object, use that object. Otherwise, use the newly created object.
    if (typeof result === 'object' && result !== null) {
      return result;
    } else {
      return obj;
    }
  }
// Usage of the constructor function with the new operator
const instance = new Example(); // simplified version
  
// new.target
function Car(color) {
    if (!new.target) {
        // Called as function.
        return `${color} car`;
    }
    // Called with new.
    this.color = color;
}

const a = Car("red"); // a is "red car"
const b = new Car("red"); // b is `Car { color: "red" }`
  
// **************************************************
// **************************************************
function Constructor() {}
const obj = new Constructor();
// obj ---> Constructor.prototype ---> Object.prototype ---> null


function Base() {}
function Derived() {}
// Re-assigns `Derived.prototype` to a new object
// with `Base.prototype` as its `[[Prototype]]`
// DON'T DO THIS — use Object.setPrototypeOf to mutate it instead
Derived.prototype = Object.create(Base.prototype);
// **************************************************
// **************************************************
