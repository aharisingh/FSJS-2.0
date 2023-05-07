const express = require("express")
const app =  express()
const port = 5000

const {products} =  require("./data")
app.get("/",(req,res) =>{
    res.send("<h1>Home page</h1><a href = '/api/products'>products</a>")
})

app.get("/api/products",(req,res) =>{
    const newProducts = products.map((product) =>{
        const {id , name,image} =  product
        return {id,name,image}
    })
   return res.json(newProducts)
})

app.get("/api/products/:productId",(req,res) =>{
   const {productId} =  req.params
   const singleProduct =  products.find((product) =>{
    return product.id === Number(productId)
   })
   if(!singleProduct){
    return res.status(404).send("Product does not exist")
   }
   res.json(singleProduct)
})

app.get("/api/v1/query",(req,res) =>{
    // console.log(req.query)
    const {search,limit} =  req.query
    let sortedProducts = [...products]
    if(search){
        sortedProducts = sortedProducts.filter((product) =>{
            return product.name.startsWith(search)
        })
    }
    if(limit){
        sortedProducts =  sortedProducts.slice(0,Number(limit))
    }
    if(sortedProducts.length < 1){
        res.status(200).json({success : true,data:[]})
    }
    else
    res.status(200).json(sortedProducts)
})

app.listen(port,() =>{
    console.log(`Server is listening on ${port}`)
})