const mongoose = require('mongoose')
const TypeSchema = require('./type')
const CourseSchema = require('./course')
const RecipeSchema = require('./recipe')
const DirectionSchema = require('./direction')

const Type = mongoose.model('Type', TypeSchema)
const Course = mongoose.model('Course', CourseSchema)
const Recipe = mongoose.model('Recipe', RecipeSchema)
const Direction = mongoose.model('Direction', DirectionSchema)


module.exports = {
  Type,
  Course,
  Recipe,
  Direction
}