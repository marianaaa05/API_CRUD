//cerebro del backend, lógica
// console.log("Hola desde el server");

const express = require('express')
const app= express()

app.listen(3000, () => {
  console.log('Server corriendo en puerto 3000')
})