# JSON Web Tokens [ JWT ]
## Different ways of Authorization
- Using Session ID
- Using JWT
### Using Session ID
In this approach, when a user logs into an application, the login data goes to the server, where it is stored in a session in the server memory. This session has a unique ID called session ID, which is sent to the client. 

Now, if the client wants to use a certain feature, a request is made to the server along with the session ID. The server checks if the user associated with that ID has access to the feature, and accordingly a response is sent.

 ![alt text](image.png)

### Using JWT
The working of this approach is almost identical to that of Session ID authorization, but here instead of a session ID, a JWT is generated.
Json web token, or JWT is a unique string generated using the login data, and is of the form _aaa.bbb.ccc_

- _aaa_ part represents the Header
- _bbb_ part is Payload
- _ccc_ part is Signature

![alt text](image-1.png)

The main difference between the two approaches is that in Session ID approach the User data is stored in the server memory, while in JWT approach, the token is not stored on the server and is just sent back to the client. Hence, 
- JWT is **Stateless**
- Session ID is **Stateful**