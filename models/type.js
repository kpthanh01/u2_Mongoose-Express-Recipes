const { Schema } = require('mongoose')

const Type = new Schema(
  {
    cuisine: { type: String, required: true },
  },
  { timestamps: true }
)

module.exports = Type