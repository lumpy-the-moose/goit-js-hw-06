const input = document.querySelector('#validation-input');

input.addEventListener('blur', e => {
  const length = e.target.value.length;

  if (length === 6) {
    e.target.classList.add('valid');
    e.target.classList.remove('invalid');
  } else if (length !== 6 && length !== 0) {
    e.target.classList.add('invalid');
    e.target.classList.remove('valid');
  } else {
    e.target.classList.remove('valid');
    e.target.classList.remove('invalid');
  }
});
