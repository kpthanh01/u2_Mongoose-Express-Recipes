const { Schema } = require('mongoose')

const Direction = new Schema(
  {
    description: {type: [String], required: true},
    recipe_id: {type: Schema.Types.ObjectId, required: true}
  }
)

module.exports = Direction