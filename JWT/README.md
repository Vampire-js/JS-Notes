# JSON Web Tokens [ JWT ]
## Different ways of Authorization
- Using Session ID
- Using JWT
### Using Session ID
In this approach, when a user logs into an application, the login data goes to the server, where it is stored in a session in the server memory. This session has a unique ID called session ID, which is sent to the client. 

Now, if the client wants to use a certain feature, a request is made to the server along with the session ID. The server checks if the user associated with that ID has access to the feature, and accordingly a response is sent.

![image](https://github.com/user-attachments/assets/ec4c74e3-f3ee-422c-98e8-b7d0da351a9c)


### Using JWT
The working of this approach is almost identical to that of Session ID authorization, but here instead of a session ID, a JWT is generated.
Json web token, or JWT is a unique string generated using the login data, and is of the form _aaa.bbb.ccc_

- _aaa_ part represents the Header
- _bbb_ part is Payload
- _ccc_ part is Signature

![image](https://github.com/user-attachments/assets/b9e80c37-1219-46f1-8179-4c41198e91fb)
