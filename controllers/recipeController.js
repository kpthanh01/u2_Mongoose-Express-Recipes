const { Recipe } = require('../models')

const getRecipes = async (req, res) => {
  try {
    let recipe
    let { servings } = req.query
    if (servings) {
      recipe = await Recipe.find({ servings: `${servings}` })
    } else {
      recipe = await Recipe.find({})
    }
    res.json(recipe)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getRecipeById = async (req, res) => {
  try {
    let { id } = req.params
    let recipe = await Recipe.findById(id)
    if (recipe) {
      return res.json(recipe)
    }
    return res.status(400).send('Recipe with the specified ID does not exist')
  } catch (error) {
    if (error.name === 'CastError' && error.kind === 'ObjectId') {
      return res.status(404).send('That Recipe does not exist')
    }
    return res.status(500).send(error.message)
  }
}

const createRecipe = async (req, res) => {
  try {
    let recipe = await new Recipe(req.body)
    await recipe.save()
    return res.status(201).json({
      recipe
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const updateRecipe = async (req, res) => {
  try {
    let { id } = req.params
    let updated = await Recipe.findByIdAndUpdate(id, req.body, { new: true })
    if (updated) {
      return res.status(200).json(updated)
    }
    throw new Error('Recipe not Found')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const deleteRecipe = async (req, res) => {
  try {
    let { id } = req.params
    let deleted = await Recipe.findByIdAndDelete(id)
    if (deleted) {
      return res.status(200).send('Recipe deleted')
    }
    throw new Error('Recipe not Found')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  getRecipes,
  getRecipeById,
  createRecipe,
  updateRecipe,
  deleteRecipe
}