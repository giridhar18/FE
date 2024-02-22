// Array is an exotic object that has different implementation of [[DefineOwnProperty]] internal method than ordinary objects. Similarly, Proxy is used for developers.
// Proxy, Reflect
// The Reflect namespace object contains static methods for invoking interceptable JavaScript object internal methods. The methods are the same as those of proxy handlers. (like Math object??)
const data = {
    prop1: 'value1',
    prop2: 'value2',
}
const handler = {
    get(object, property, receiver) {  // traps for objects' internal methods
        // console.log('object', object)
        // console.log('property', property)
        // console.log('receiver', receiver)
        if (property === 'prop1') {
            return 'intercepted'
        }
        // console.log(arguments)
        return Reflect.get(...arguments)
    }
}

const dataProxy = new Proxy(data, handler)
console.log(dataProxy.prop1) // intercepted
// console.log(dataProxy.prop2) // intercepted

// As another example, arrays differ from normal objects, because they have a magic length property that, when modified, automatically allocates empty slots or removes elements from the array. Similarly, adding array elements automatically changes the length property. This is because arrays have a [[DefineOwnProperty]] internal method that knows to update length when an integer index is written to, or update the array contents when length is written to. Such objects whose internal methods have different implementations from ordinary objects are called exotic objects. Proxy enable developers to define their own exotic objects with full capacity.

// ----------------------------------------------------------
// No private property forwarding
class Secret {
    #secret
    constructor (secret) {
        this.#secret = secret
    }
    get secret () {
        return this.#secret.replace(/\d+/,`****${this.#secret.slice(-4)}`)
    }
}
const secret1 = new Secret('123445232123')
console.log(secret1.secret)

const secret1Proxy = new Proxy(secret1, {
    get (target, property, receiver) { // private members forwarding proxy
        return target[property]
    }
})
console.log(secret1Proxy.secret)

// ----------------------------------------------------------
// Method forwarding proxy
// class Secret {
//     #x = 1;
//     x() {
//         return this.#x;
//     }
// }
// const aSecret = new Secret();
// const proxy = new Proxy(aSecret, {
//     get(target, prop, receiver) {
//         const value = target[prop];
//         if (value instanceof Function) {
//         return function (...args) {
//             return value.apply(this === receiver ? target : this, args);
//         };
//         }
//         return value;
//     },
// });
// console.log(proxy.x());

// ----------------------------------------------------------
// Validation Proxy using set trap
const validator = {
    set(obj, prop, value) {
      if (prop === "age") {
        if (!Number.isInteger(value)) {
          throw new TypeError("The age is not an integer")
        }
        if (value > 200) {
          throw new RangeError("The age seems invalid")
        }
      }
  
      // The default behavior to store the value
      obj[prop] = value
  
      // Indicate success
      return true
    }
}
const person = new Proxy({}, validator)
person.age = 100
console.log(person.age) // 100
// person.age = "young" // Throws an exception
// person.age = 300 // Throws an exception
  
// ----------------------------------------------------------
// Browsers list and get  Latest Browser //

//  browsers = ['Firefox', 'Chrome']
//  pass a string (by mistake) //  ['Safari'] <- no problem, the value is an array
//  browsers = ['Safari', 'Edge']
//  latestBrowser = 'Edge'

const browserList = {
    browsers: ['fiefox', 'chrome']
}
const productHandler = {
    get (object, property, receiver) {
        if (property === 'latestBrowser') {
            return object.browsers[object.browsers.length -1]
        }
        return object[property]
    },
    set (object, property, newValue) {
        if (property === 'latestBrowser') {
            object.browsers.push(newValue);
            return true;
        }
        if (typeof newValue === 'string') {
            newValue = [newValue];
        }

        object[property] = newValue;
        return true;
    }
}
const products = new Proxy(browserList, productHandler)
console.log(products.browsers) // current browser list
console.log(products.latestBrowser) // latest browser

products.browsers = 'Safari'
console.log(products.browsers)
products.latestBrowser = 'Edge'
console.log(products.browsers)
console.log(products.latestBrowser)


// ----------------------------------------------------------
// Trap list exapmle
/*
  const docCookies = ... get the "docCookies" object here:
  https://reference.codeproject.com/dom/document/cookie/simple_document.cookie_framework
*/

const docCookies = new Proxy(docCookies, {
    get(target, key) {
      return target[key] ?? target.getItem(key) ?? undefined;
    },
    set(target, key, value) {
      if (key in target) {
        return false;
      }
      return target.setItem(key, value);
    },
    deleteProperty(target, key) {
      if (!(key in target)) {
        return false;
      }
      return target.removeItem(key);
    },
    ownKeys(target) {
      return target.keys();
    },
    has(target, key) {
      return key in target || target.hasItem(key);
    },
    defineProperty(target, key, descriptor) {
      if (descriptor && "value" in descriptor) {
        target.setItem(key, descriptor.value);
      }
      return target;
    },
    getOwnPropertyDescriptor(target, key) {
      const value = target.getItem(key);
      return value
        ? {
            value,
            writable: true,
            enumerable: true,
            configurable: false,
          }
        : undefined;
    },
  });
  
  /* Cookies test */
  
  console.log((docCookies.myCookie1 = "First value"));
  console.log(docCookies.getItem("myCookie1"));
  
  docCookies.setItem("myCookie1", "Changed value");
  console.log(docCookies.myCookie1);