// Promise (implements Thenable interface) - all, allSettled, any, race
const promiseA = new Promise((resolve, reject) => {
    resolve(777)
})
// At this point, "promiseA" is already settled.
promiseA.then((val) => console.log("asynchronous logging has val:", val))
console.log("immediate logging")

// produces output in this order:
// immediate logging
// asynchronous logging has val: 777

// Promise.all
Promise.allCustom = function (allPromises) {
    return new Promise((resolve, reject) => {
        const results = []
        allPromises.forEach((promise, index) => {
            promise.then((response) => {
                results.push(response)
                if (results.length=== allPromises.length) {
                    resolve(results)
                }
            }, (error) => {
                reject(error)
            })
        })
    })
}