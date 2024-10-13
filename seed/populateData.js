const db = require('../db')
const { Type, Course, Recipe, Direction } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const type1 = await new Type({
    cuisine: 'American'
  })

  const course1 = await new Course({
    course: 'Main'
  })

  type1.save()
  course1.save()

  const recipe1 = await new Recipe({
    name: 'Chicken Pot Pie',
    ingredients: [
      {
        name: 'kinless, boneless chicken breast halves - cubed',
        quantity: 1,
        measure: 'pound'
      },
      {
        name: 'sliced carrots',
        quantity: 1,
        measure: 'cup'
      },
      {
        name: 'frozen green peas',
        quantity: 1,
        measure: 'cup'
      },
      {
        name: 'sliced celery',
        quantity: 0.5,
        measure: 'cup'
      },
      {
        name: 'butter',
        quantity: 0.33,
        measure: 'cup'
      },
      {
        name: 'chopped onion',
        quantity: 0.33,
        measure: 'cup'
      },
      {
        name: 'all-purpose flour',
        quantity: 0.33,
        measure: 'cup'
      },
      {
        name: 'salt',
        quantity: 0.5,
        measure: 'teaspoon'
      },
      {
        name: 'black pepper',
        quantity: 0.25,
        measure: 'teaspoon'
      },
      {
        name: 'celery seed',
        quantity: 0.25,
        measure: 'teaspoon'
      },
      {
        name: 'chicken broth',
        quantity: 1.75,
        measure: 'cup'
      },
      {
        name: 'milk',
        quantity: 0.66,
        measure: 'cup'
      },
      {
        name: 'unbaked pie crusts',
        quantity: 2,
        measure: ''
      },
    ],
    prep_time: 20,
    cooking_time: 50,
    total_time: 80,
    servings: 8,
    calories: 412,
    type_id: type1._id,
    course_id: course1._id
  })
  
  recipe1.save()

  const direction1 = [{
    direction: [
      'Gather all ingredients and preheat the oven to 425 degrees F (220 degrees C.)',
      'Combine chicken, carrots, peas, and celery in a saucepan; add water to cover and bring to a boil. Boil for 15 minutes, then remove from the heat and drain.',
      'While chicken is cooking, melt butter in another saucepan over medium heat. Add onion and cook until soft and translucent, 5 to 7 minutes. Stir in flour, salt, pepper, and celery seed.',
      'Slowly stir in chicken broth and milk.',
      'Reduce heat to medium-low and simmer until thick, 5 to 10 minutes. Remove from heat and set aside.',
      'Place chicken and vegetables in the bottom pie crust. Pour hot broth mixture over top.',
      'Cover with top crust, seal the edges, and cut away any excess dough. Make several small slits in the top crust to allow steam to escape.',
      'Bake in the preheated oven until pastry is golden brown and filling is bubbly, 30 to 35 minutes. Cool for 10 minutes before serving.',
      'Enjoy!',
    ],
    recipe_id: recipe1._id
  }]
  await Direction.insertMany(direction1)
  console.log('Direction Created!')
}

const run = async () => {
  await main()
  db.close()
}

run()