l# Promises
_Defination: A promise is a placeholder, which is eventually filled in when async operation is completed_

Suppose we have a shopping app where we want to place orders for the items placed in the carts.

```js
const cart = ['item1', 'item2', 'item3']

placeOrder(cart , makeReciept())
```
Here, we are passing a function as a callback to the _placeOrder()_ function. While this works, it has got its problems.
- We are losing the control over this operation. What if the callback function is called multiple times? What if callback isn't called even once?
- Callback hell :skull: . What if we have a situation like this:
```js
const cart = ['item1', 'item2', 'item3']
placeOrder(cart , (cost) => {
    makeReciept(cost , () => {
        updateBalance(cost)
    })
})
``` 
This makes the code hard to read, maintain, and ugly in general :skull:

**To solve this, we use PROMISES!!**

```js
//Example using promises
const cart = ['item1', 'item2', 'item3']
const promise = placeOrder(cart)
promise.then(makeReciept())
```
Here, we are solving the problem of giving up the control, as here we are making it 100% sure that the _makeReciept()_ function is called only once, in general increasing control.

## Promise chaining
This is done to solve the problem of **callback hell**. This chaining is done using the **.then()** functions.

```js

const cart = ['item1', 'item2', 'item3']
placeOrder(cart)
.then(details => {
    return makeReciept(details)
})
.then(cost => {
    updateBalance(cost)
})
```
### Promise state
These are the possible states a promise can be in. They are:
- Pending
- Fulfilled
- Rejected

# Creating a promise
Let's see how the previously used function _placeOrder()_ returns a promise.

```js
function placeOrder(){
    const promise = new Promise((resolve, reject) => {
        if(!isOrderValid()){
            reject("Invalid request!")
        }
        let orderID = getID()
        resolve(orderID)
    })
}
```

# Handling errors
What if in the above code, the _isOrderValid()_ function returns false, in that case if the developer doesn't handle the error, it'll show up in the browser, and the user of the website will be like "ahh nothing happened? :thinking: "

Hence to handle the error, we can use the _.catch()_ function.

```js
const cart = ['item1', 'item2', 'item3']
placeOrder(cart)
.then((orderID) => {
    showCheckOutPage(orderID)
})
.catch((err) => {
    showErrorPage()
})

function placeOrder(){
    const promise = new Promise((resolve, reject) => {
        if(!isOrderValid()){
            reject("Invalid request!")
        }
        let orderID = getID()
        resolve(orderID)
    })
}

```

Also, we can place the _.catch()_ function wherever in the chain we want to handle error. Everything above the _.catch()_ will be considered in the error handling.


### API Reference
1) Promise.all([p1, p2, p3]) :

- Used to handle multiple promsies simultaneously.
- Returns an array of results for each of the promises.
- Will wait for all calls to finish and then will give the response.
- If any of the promises are rejected, Promise.all will throw an error and will not wait for other promises.
2) Promise.allSettled([p1, p2, p3]) :

- Waits for all promises to get settled, and then will return all responses regardless of success or failure
3) Promise.race([p1, p2, p3]) :

- Will return the value of first promise to be settled
- If 1st promise is rejected, error will be thrown
- Will not wait for other promises to settle
4) Promise.any([p1, p2, p3]) :

- Will wait for the 1st success
- If all fail, will return an aggregated error (array of reject messages of all promises)

