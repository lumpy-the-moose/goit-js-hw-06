const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const ingredientsList = document.querySelector('#ingredients');

const ingredientsItems = ingredients.map(name => {
  const listItem = document.createElement('li');
  listItem.textContent = name;
  listItem.classList.add('item');

  return listItem;
});

ingredientsList.append(...ingredientsItems);
