const express = require("express")
const mongoose = require("mongoose")
const path = require("path")
const cookieParser = require("cookie-parser")
const jsonWebToken = require("jsonwebtoken")
const { decode } = require("punycode")

mongoose
  .connect("mongodb://127.0.0.1:27017", {
    dbName: "backend",
  })
  .then(() => console.log("Database Connected"))
  .catch((e) => console.log(e));

const userSchema = new mongoose.Schema({
  name :  String, 
  email  : String
})

const User = mongoose.model("User", userSchema);

const app = express();

// Using Middlewares
app.use(express.static(path.join(path.resolve(), "public")));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser())

// Setting up View Engine
app.set("view engine", "ejs")

const isAuthenticated =async (req,res,next) =>{
  const {token} =  req.cookies
  if(token){//current state - logged in 
    const decoded = jsonWebToken.verify(token,"abcdefgh")
    req.user = await User.findById(decoded._id)
    next()
  }
  else{//curent state - logged out
    res.render("login")
  }
}

app.get("/",isAuthenticated ,(req,res) =>{
    res.render("logout",{name : req.user.name})
})

app.get("/login",(req,res) =>{
  res.render("login")
})

app.get("/register",(req,res) =>{
  res.render("register")
})

app.post("/login" , async (req,res) =>{
  const {name,email} = req.body
  let user = await User.findOne({email})
  if(!user){//user doesn't exist
    console.log("User doesn't exist")
    return res.redirect("/register")
  }
  //user exist
  const token = jsonWebToken.sign({_id : user._id},"abcdefgh")
  console.log(token)
  res.cookie("token",token,{
    httpOnly :  true,
    expires :  new Date(Date.now()  + 60000)
  })
  res.redirect("/")
})

app.post("/register",async (req,res) =>{
  console.log(req.body)
  const {name,email} =  req.body
  let user = await User.findOne({email})
  if(user){//user already exist
    console.log("User already exist")
    res.redirect("/login")
    return
  }
   user = await User.create({
    name,
    email
  })
  const token = jsonWebToken.sign({_id : user._id},"abcdefgh")
  console.log(token)
  res.cookie("token",token,{
    httpOnly :  true,
    expires :  new Date(Date.now()  + 60000)
  })
  res.redirect("/")
})

app.get("/logout",(req,res) =>{
  res.cookie("token","",{
    httpOnly :  true,
    expires :  new Date(Date.now())
  })
  res.redirect("/")
})



app.listen(5000, () => {
  console.log("Server is working");
});
