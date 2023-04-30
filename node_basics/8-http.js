
const http  =  require("http")
const server =  http.createServer((req,res) =>{
  if(req.url == "/"){
    res.write("Welcome to Our Home Page")
  }
  else if(req.url == "/about"){
    res.write("Welcome to our About Page")
  }
  else{
  res.write(`
  <h1>OOPS</h1>
  <p>Page Not Found</p>
  <a href = "/">Back to Home</a>
  `)
  }
  res.end()
})

server.listen(5000)
