const express = require("express")
const app = express()
const port  =  5000
//parse form data
app.use(express.urlencoded({extended : false }))
//parse json
app.use(express.json())

const people = require("./routes/people")

app.use(express.static("./methods-public"))

app.use("/api/people",people)


app.post("/login",(req,res) =>{
    const {name} =  req.body
    if(name){
        return res.status(200).send(`Hola ${name}`)
    }
    return res.status(401).send(`Please provide Credentials`)
})

app.listen(port,() =>{
    console.log(`Server is listening on ${port}`)
})