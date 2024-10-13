const { Schema } = require('mongoose')

const Recipe = new Schema(
  {
    name: { type: String, required: true },
    ingredients: {
      type: [
        {
          name: { type: String, required: true },
          quantity: { type: Number, required: true },
          measure: { type: String, required: false }
        }
      ], required: true
    },
    prep_time: { type: Number, required: true },
    cooking_time: { type: Number, required: true },
    total_time: { type: Number, required: true },
    servings: { type: Number, required: true },
    calories: { type: Number, required: true },
    type_id: { type: Schema.Types.ObjectId, required: true },
    course_id: { type: Schema.Types.ObjectId, required: true },
  }
)

module.exports = Recipe