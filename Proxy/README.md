# JS Proxy

A proxy is an object only, just that it allows us to intercept and redefine object related operations.

For example, if I have an object of the following type:

```js

const obj = {
    a : 10
}
```
Now, I can simply change the value as follows:

```js
obj.a = 20
```
But, what if I have a condition that value of "a" should always be less than 50? We can accomplish this by writing an if-else block right before assigning the value, but a more clean way of doing this is by using **Proxy**.

Lets rewrite the above object as a proxy:
```js
//PROXY TAKES 2 PARAMETERS, TARGET AND HANDLER

const target = {
    a:20
}

const handler = {
    set(val){
        if(val < 50){
            return val
        }else{
            //imaginary function that throws an error
            throwError(val) 
        }
    }
}

const proxy = new Proxy(target, handler)
```
Now, if I try to change the value, 

```JS
proxy.a = 60 //ERROR!
proxy.a = 20 //ACCEPTED
```