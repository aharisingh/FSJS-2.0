const http = require("http")
const {readFileSync} =  require("fs")

const homePage =  readFileSync("./navbar-app/index.html","utf-8")
const homeStyles = readFileSync("./navbar-app/styles.css")
const homeImage  =  readFileSync("./navbar-app/logo.svg")
const homeLogic =  readFileSync("./navbar-app/browser-app.js")

const server =  http.createServer((req,res) => {
  const url =  req.url
  if(url === "/"){
    res.writeHead(200 , {'content-type' : 'text/html'})
    res.write(homePage)
  }
  else if(url === "/about"){
    res.writeHead(200 , {'content-type' : 'text/html'})
    res.write("<h1>About Page!</h1>")
  }
  else if(url === "/styles.css"){
    res.writeHead(200 , {'content-type' : 'text/css'})
    res.write(homeStyles)
  }
  else if(url === "/logo.svg"){
    res.writeHead(200 , {'content-type' : 'image/svg+xml'})
    res.write(homeImage)
  }
  else if(url === "/browser-app.js"){
    res.writeHead(200 , {'content-type' : "text/javascript"})
    res.write(homeLogic)
  }
  else if(url === "/contact"){
    res.writeHead(200 , {'content-type' : 'text/html'})
    res.write("<h1>Contact Page!</h1>")
  }
  else{
    res.writeHead(404 , {'content-type' : 'text/html'})
    res.write("<h1>Page Not Found</h1>")
  }
   res.end()
})

server.listen(5000)