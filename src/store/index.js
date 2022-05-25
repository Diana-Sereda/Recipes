import { createStore } from 'vuex'

export default createStore({
  state: {
    recipes: [
      {
      slug: 'cupcake',
      url: require("../assets/cupcake.jpg"),
      title: 'Cupcake',
      description: 'Ideal for novice bakers, this basic cupcake recipe takes just 15 minutes to prepare and uses just five ingredients.',
      ingredients: [
        '250g unsalted butter, softened',
        '250g caster sugar',
        '250g self-raising flour',
        '4 medium eggs',
        '4 tablespoons milk',
        'Pinch of salt (optional)',
      ],
      method: [
        'Preheat the oven to 190C, 375F, gas 5. Line two muffin trays with 12 cupcake cases or bake in batches of 12 using one muffin tray.',
        'Start by creaming butter and sugar together in a bowl using a wooden spoon or electric whisk. Beat until soft and fluffy. Then add the flour, eggs, milk, and salt and whisk until the mixture is smooth.',
        'Use a traditional-style ice-cream scoop, or spoon, to divide the mixture between all the paper cases making sure to get an even amount of mixture in each.',
        'Place both muffin tins in the oven and bake for 15 minutes, then swap over the position of the tins over and bake for a further 3-7 minutes, until both trays of cupcakes are a light golden colour.',
        'Remove the tins from the oven. Leave the cupcakes to cool in the tins for a few minutes. Then transfer them to a wire rack to cool. Once completely cooled, the cupcakes can be decorated.',
      ]
      },
       {
        slug: 'pelmeni',
        url: require("../assets/pelmeni.jpg"),
        title: 'Pelmeni',
        description: 'Ideal for novice bakers, this basic cupcake recipe takes just 15 minutes to prepare and uses just five ingredients.',
        ingredients: [
          '2 large eggs, room temperature',
          '2/3 cup tepid water',
          '1 tablespoon vegetable oil',
          '1/2 teaspoon kosher salt',
          '3 1/4 cups (460 grams) all-purpose flour, divided, plus more for dusting',
          '1 large onion, finely grated',
          '1/2 teaspoon freshly ground black pepper, plus more for serving',
          '8 ounces ground beef chuck',
          '8 ounces ground lean pork',
        ],
      method: [
        'In a food processor, pulse to combine eggs, water, oil, salt, and half of the flour.',
        'Turn out dough onto a lightly floured surface and knead for about 5 minutes or until it is no longer sticky.',
        'In a medium bowl, combine onion, ground pork, ground beef, salt, and pepper and stir until thoroughly mixed.',
        'Spread 1 teaspoon of filling on the circle, almost to the edges.',
      ]
    },
    ]
  },
  mutations: {
    ADD_RECIPE(state, recipe) {
      state.recipes.push(recipe)
    }
  },
  actions: {
  },
  modules: {
  }
})
