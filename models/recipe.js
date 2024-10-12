const { Schema } = require('mongoose')

const Recipe = new Schema(
  {
    name: {type: String, required: true},
    ingredients: {type: [String], required: true},
    cooking_time: {type: String, required: true},
    prep_time: {type: String, required: true},
    type_id: {type: Schema.Types.ObjectId, required: true}
  }
)

module.exports = Recipe