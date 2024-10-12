const { Schema } = require('mongoose')

const Type = new Schema(
  {
    origin: {type: String, required: true},
    catagory: {type: String, required: true},
  }
)

module.exports = Type