const express = require("express")
const app = express()
const port  =  5000
//parse form data
app.use(express.urlencoded({extended : false }))
//parse json
app.use(express.json())

const people = require("./routes/people")
const auth =  require("./routes/auth")
app.use(express.static("./methods-public"))

app.use("/api/people",people)
app.use("/listen",auth)
app.listen(port,() =>{
    console.log(`Server is listening on ${port}`)
})