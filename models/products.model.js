const mongoose = require('mongoose')

const ProductSchema = mongoose.Schema(
  {
    name: {
      type: String,
      require: [true, "ingrese el nombre del producto: "]
    },

    quantity: {
      type: Number,
      require: true,
      default: 0
    },

    price: {
      type: Number,
      require: true,
      default: 0
    },
    image: {
      type: String,
      require: false
    }
  },
    {
      Timestamps: true
    }
  
)
const Product = mongoose.model("Product",ProductSchema)

module.exports = Product