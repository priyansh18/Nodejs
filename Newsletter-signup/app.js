const express =  require("express")
const bodyParser = require("body-parser")
const request = require("request")
const app = express()

app.use(express.static(__dirname + '/public'))
app.use(bodyParser.urlencoded({extended:true}))

app.get("/",function(req,res){
    res.sendFile(__dirname + "/signup.html")
})

app.post("/",function(req,res){
    console.log(req.body)
    var email = req.body.email
    var firstname = req.body.fname
    var lastname = req.body.lname

    console.log(email, firstname,lastname)
})


app.listen(3000,function(){
    console.log("Server is rinning on port 3000")
})