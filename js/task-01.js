const listItems = document.querySelectorAll('.item');

console.log('Number of categories: ', listItems.length);

[...listItems].map(item => {
  console.log('Category: ', item.firstElementChild.textContent);
  console.log('Elements: ', item.getElementsByTagName('li').length);
});
