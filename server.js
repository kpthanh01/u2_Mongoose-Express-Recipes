const express = require('express')
const cors = require('cors')
const logger = require('morgan')
const bodyParser = require('body-parser')
const db = require('./db')
//Import Controllers
const typeController = require('./controllers/typeController')
const courseController = require('./controllers/courseController')
const recipeController = require('./controllers/recipeController')
const directionController = require('./controllers/directionController')

const PORT = process.env.PORT || 3001

const app = express()

app.use(cors())
app.use(express.json())
app.use(logger('dev'))
app.use(bodyParser.json())

app.get('/', (req,res) => {
  res.send('This is Recipe Root')
})

app.get('/types', typeController.getAllTypes)
app.get('/types/:id', typeController.getTypeById)
app.post('/types', typeController.createType)
app.put('/types/:id', typeController.updateType)
app.delete('/types/:id', typeController.deleteType)

app.get('/courses', courseController.getAllCourses)
app.get('/courses/:id', courseController.getCourseById)
app.post('/courses', courseController.createCourse)
app.put('/courses/:id', courseController.updateCourse)
app.delete('/courses/:id', courseController.deleteCourse)

app.get('/recipes', recipeController.getRecipes)
app.get('/recipes/:id', recipeController.getRecipeById)
app.post('/recipes', recipeController.createRecipe)
app.put('/recipes/:id', recipeController.updateRecipe)
app.delete('/recipes/:id', recipeController.deleteRecipe)

app.get('/directions', directionController.getAllDirections)
app.get('/directions/:id', directionController.getDirectionById)
app.post('/directions', directionController.createDirection)
app.put('/directions/:id', directionController.updateDirection)
app.delete('/directions/:id', directionController.deleteDirection)

app.get('/*', (req, res) => {
  res.send('This Path does not exist')
})

app.listen(PORT, () => {
  console.log(`Express is listening on port: ${PORT}`)
})