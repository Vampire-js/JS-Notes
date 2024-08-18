# Async Functions
An async function is a type of function which ALWAYS returns a promise.
For example:
```js

async function getData(){
    return "hello"
}

console.logg(getData()) // This will log out a promise!
getData().then(e => console.log(e)) //This will log out "hello"
```
It will wrap whatever we return into a promise incase we don't return a promise ourselves.

## Await
**Await can only be used inside an async function!!**
Well, even this is used to resolve a promise. 

```js
let promise = new Promise((resolve, reject) => {
    setTimeOut(resolve("promise resolved!!!") , 10000)
})
async function getData(){
    let p = await promise
    console.log(p)
}
getData() // OUTPUT: promise resolved!!!
```
But, this is different from using _.then()_


## .then() vs await
Consider this example:
```js
let promise = new Promise((resolve, reject) => {
    setTimeOut(resolve("promise resolved!!!") , 10000)
})
async function getData(){
    promise.then(e => console.log(e))
    console.log("hello")
}
getData() 
```

Here, the JS Engine will NOT wait for 10 seconds when resolving the promise, as we have put a 10 secs delay, and will rather move ahead to console log "hello" and after 10 secs it will console log "promise resolved!!!"

While in the case of await, it will SUSPEND the execution of that function itself! It's not waiting! And after 10 seconds, it will resume execution from where it left off last time!
![image](https://github.com/user-attachments/assets/7d5c61c0-1e33-4492-9aec-f91cc45c6b6b)
