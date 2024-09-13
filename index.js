//cerebro del backend, lógica
// console.log("Hola desde el server");
const express = require('express')
const mongoose = require('mongoose')
const Product = require('./models/products.model')
const app= express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.get('/', (req, res) =>{
  res.send("Hola desde Node API:)")
})

app.get('/api/products', async (req, res) => {
  try {
    const product = await Product.find({})
    res.status(200).json(product)
  } catch (error){
    res.status(500).json({message: error.message})
  }
})

app.get('/api/products/:id', async (req, res) => {
  try {
    const {id} = req.params
    const product = await Product.findById(id)
    res.status(200).json(product)
  } catch (error){
    res.status(500).json({message: error.message})
  }
})



app.post('/api/products', async (req, res) => {
  try {
    const product = await Product.create(req.body)
    res.status(200).json(product)
  } catch (error){
    res.status(500).json({message: error.message})
  }
})

app.put('/api/products/:id', async (req, res) => {
  try{
    const {id} =req.params
    const product = await Product.findByIdAndUpdate(id, req.body)
    if(!product){
      return res.status(404).json({message: "Producto no encontrado"})
    }

    const updateProduct = await Product.findById(id)
    res.status(200).json(updateProduct)

  }catch(error){
    res.status(500).json({message: error.message})
  }
})

app.delete('/api/products/:id', async (req, res) => {
  try{
    const {id} =req.params
    const productDelete = await Product.findByIdAndDelete(id)

    if(!productDelete){
      return res.status(404).json({message: "Producto no Encontrado"})
    }

    res.status(200).json({message: "Producto eliminado."})

  }catch(error){
    res.status(500).json({message: error.message})
  }
})
// app.post('/api/products', (req, res) => {
//   console.log(req.body)
//   res.send(req.body)
// })

mongoose.connect("mongodb+srv://nanaarredondo220:ux5lTYELuCVhBKz2@cluster0.uqxz3.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(() => {
  console.log("ok, conexion exitosa")
  app.listen(3000, () => {
    console.log("Server corriendo en puerto 3000")
  })
})
.catch(() => {
  console.log("fallo")
})