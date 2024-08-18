const express = require("express")
var bodyParser = require('body-parser')
const app = express()
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
let users = []

app.get('/profile', (req, res) => {
    res.sendFile(__dirname + "/public/profile.html")
})

app.get('/login', (req, res) => {
    res.sendFile(__dirname + "/public/login.html")
})

app.post('/login', (req, res) => {
    
    for(let i=0; i<users.length ; i++){
        console.log(users[i] , req.body)
        if(users[i].username == req.body.username &&
            users[i].password == req.body.password){
                res.status(200).send("")
            }
            
    }
    // if () {
    //     res.status(200).send("")
    // } else {
    //     res.status(201).send("")
    // }
})

app.get('/signup', (req, res) => {
    res.sendFile(__dirname + "/public/signup.html")
})

app.post('/signup', (req, res) => {
    users.push(req.body)
    console.log(users)

    res.status(200).send("")

})


app.listen(3000, () => {
    console.log("Up and running!")
})