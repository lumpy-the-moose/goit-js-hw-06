const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const ingredientsList = document.querySelector('#ingredients');

ingredients.forEach(name => {
  const listItem = document.createElement('li');
  listItem.textContent = name;
  listItem.classList.add('item');
  ingredientsList.append(listItem);
});
