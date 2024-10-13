const { Course } = require('../models')

const getAllCourses = async (req, res) => {
  try {
    let course = await Course.find({})
    res.json(course)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getCourseById = async (req, res) => {
  try {
    let { id } = req.params
    let course = await Course.findById(id)
    if (course) {
      return res.json(course)
    }
    return res.status(400).send('Course with the specified ID does not exist')
  } catch (error) {
    if (error.name === 'CastError' && error.kind === 'ObjectId') {
      return res.status(404).send('That Course does not exist')
    }
    return res.status(500).send(error.message)
  }
}

const createCourse = async (req, res) => {
  try {
    let course = await new Course(req.body)
    await course.save()
    return res.status(201).json({
      course
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const updateCourse = async (req, res) => {
  try {
    let { id } = req.params
    let updated = await Course.findByIdAndUpdate(id, req.body, { new: true })
    if (updated) {
      return res.status(200).json(updated)
    }
    throw new Error('Course not Found')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const deleteCourse = async (req, res) => {
  try {
    let { id } = req.params
    let deleted = await Course.findByIdAndDelete(id)
    if(deleted){
      return res.status(200).send('Course deleted')
    }
    throw new Error('Course not Found')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  getAllCourses,
  getCourseById,
  createCourse,
  updateCourse,
  deleteCourse
}