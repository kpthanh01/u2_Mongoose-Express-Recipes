const mongoose = require('mongoose')
const TypeSchema = require('./type')
const RecipeSchema = require('./recipe')
const DirectionSchema = require('./direction')

const Type = mongoose.model('Type', TypeSchema)
const Recipe = mongoose.model('Recipe', RecipeSchema)
const Direction = mongoose.model('Direction', DirectionSchema)


module.exports = {
  Type,
  Recipe,
  Direction
}