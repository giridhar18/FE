var immute = Object.defineProperty({}, 'name', {
    value:  'giridhar'
})
immute.name = 'shukla'
console.log(immute.name)
// ----------------------------------------------------------
// Freezing an object == preventing extensions, data properties and descriptors' writable & configurable are false
// IMP: freeze is shallow, use Recursive Freeze for deep freeze
// [[PreventExtensions]] object internal method => Object.preventExtensions()
var data = { age: '30' }
Object.freeze(data)
data.age = '31'
console.log(data.age)

// ************************************************** //
function deepFreeze(object) {
    // Retrieve the property names defined on object
    const propNames = Reflect.ownKeys(object);
  
    // Freeze properties before freezing self
    for (const name of propNames) {
      const value = object[name];
  
      if ((value && typeof value === "object") || typeof value === "function") {
        deepFreeze(value);
      }
    }
  
    return Object.freeze(object);
}




// ----------------------------------------------------------
// Object Seal => non-enumerable, non-configurable and prototype can't be re-assigned but it is writable (value can be changed)
const object1 = {
    property1: 42,
};
Object.seal(object1);
object1.property1 = 33;
console.log(object1.property1); // Expected output: 33
delete object1.property1; // Cannot delete when sealed
console.log(object1.property1); // Expected output: 33