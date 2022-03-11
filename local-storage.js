const formulaire = document.querySelector('#formulaire');

formulaire.addEventListener('submit', (event) => {
  event.preventDefault();

  const userInfo = {
    name: document.querySelector('#user').value,
    email: document.querySelector('#user-email').value,
    feedback: document.querySelector('#user-message').value,
  };

  localStorage.setItem('formContent', JSON.stringify(userInfo));
});

const formInput = JSON.parse(localStorage.getItem('formContent'));
if (formInput != null) {
  document.querySelector('#user').value = formInput.name;
  document.querySelector('#user-email').value = formInput.email;
  document.querySelector('#user-message').value = formInput.feedback;
}