const { Schema } = require('mongoose')

const Course = new Schema(
  {
    course: { type: String, required: true },
  },
  { timestamps: true }
)

module.exports = Course