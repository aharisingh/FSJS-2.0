const express = require("express")
const path  =  require("path")
const app = express()
const port  = 5000

//global middleware , set up the static file
app.use(express.static("./public"))

// app.get("/",(req,res) => {
//     console.log("Home Page")
//     console.log(__dirname)
//     res.sendFile(path.join(__dirname,"./navbar-app/index.html"))
//SSR (Server Side Rendering)
// })


app.get("/about",(req,res) => {
    console.log("About Page")
    res.send("About Page")
})

app.get("/contact",(req,res) => {
    console.log("Contact Page")
    res.send("Contact Page")
})

app.all("*",(req,res) =>{
    res.status(404).send("<h6>Resource Not Found</h6>")
})

app.listen(port, () =>{
    console.log(`Server listen on port ${port}`)
})
//app.get
//app.post
//app.delete
//app.put
//app.all
//app.use
