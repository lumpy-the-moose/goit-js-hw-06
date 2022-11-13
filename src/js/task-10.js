function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const createButton = document.querySelector('[data-create]');
const destroyButton = document.querySelector('[data-destroy]');
const input = document.querySelector('[type="number"]');
const boxContainer = document.querySelector('#boxes');

createButton.addEventListener('click', () => createBoxes(input.value));
destroyButton.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
  const elementStorage = [];
  let elemSize = 30;

  for (let i = 0; i < amount; i += 1) {
    const elem = document.createElement('div');
    elem.style.backgroundColor = getRandomHexColor();
    elem.style.width = `${elemSize}px`;
    elem.style.height = `${elemSize}px`;
    elemSize += 10;
    elementStorage.push(elem);
  }

  boxContainer.append(...elementStorage);
}

function destroyBoxes() {
  boxContainer.innerHTML = '';
}
