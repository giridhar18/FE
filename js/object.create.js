// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create
Object.create(proto, propertiesObject)

// Classical inheritance with Object.create()
function Rectangle() {
    Shape.call(this);
}
Rectangle.prototype = Object.create(Shape.prototype, {
    constructor: {
        value: Rectangle,
        enumerable: false,
        writable: true,
        configurable: true,
    },
})
// ----------------------------------------------------------
o = {};
// Is equivalent to:
o = Object.create(Object.prototype);
// ----------------------------------------------------------
o2 = Object.create(
    {},
    {
        p: {
            value: 42,
            writable: true,
            enumerable: true,
            configurable: true,
        },
    },
);
// This is not equivalent to:
// o2 = Object.create({ p: 42 })
// which will create an object with prototype { p: 42 }

// ----------------------------------------------------------
// Object.create() to mimic the behavior of the new operator
function Constructor() {}
o = new Constructor()
// Is equivalent to:
o = Object.create(Constructor.prototype)