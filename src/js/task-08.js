const form = document.querySelector('.login-form');

const submitHandler = e => {
  e.preventDefault();

  const {
    elements: { email, password },
  } = e.currentTarget;

  if (email.value === '' || password.value === '') {
    alert('Please fill in all the fields!');
  }

  return console.log({
    email: email.value,
    password: password.value,
  });
};

form.addEventListener('submit', submitHandler);
