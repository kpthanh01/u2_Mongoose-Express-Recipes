const { Type } = require('../models')

const getAllTypes = async (req, res) => {
  try {
    let types = await Type.find({})
    res.json(types)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getTypeById = async (req, res) => {
  try {
    let { id } = req.params
    let type = await Type.findById(id)
    if (type) {
      return res.json(type)
    }
    return res.status(400).send('Type with the specified ID does not exist')
  } catch (error) {
    if (error.name === 'CastError' && error.kind === 'ObjectId') {
      return res.status(404).send('That type does not exist')
    }
    return res.status(500).send(error.message)
  }
}

const createType = async (req, res) => {
  try {
    let type = await new Type(req.body)
    await type.save()
    return res.status(201).json({
      type
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const updateType = async (req, res) => {
  try {
    let { id } = req.params
    let updated = await Type.findByIdAndUpdate(id, req.body, { new: true })
    if (updated) {
      return res.status(200).json(updated)
    }
    throw new Error('Type not Found')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const deleteType = async (req, res) => {
  try {
    let { id } = req.params
    let deleted = await Type.findByIdAndDelete(id)
    if(deleted){
      return res.status(200).send('Type deleted')
    }
    throw new Error('Type not Found')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  getAllTypes,
  getTypeById,
  createType,
  updateType,
  deleteType
}