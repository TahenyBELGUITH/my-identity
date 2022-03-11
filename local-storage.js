const formulaire = document.querySelector('#formulaire');

formulaire.addEventListener('focusout', () => {
  const userInfo = {
    name: document.querySelector('#user').value,
    email: document.querySelector('#user-email').value,
    feedback: document.querySelector('#user-message').value,
  };

  localStorage.setItem('formContent', JSON.stringify(userInfo));
});

const formInputObj = JSON.parse(localStorage.getItem('formContent'));
if (formInputObj !== null) {
  document.querySelector('#user').value = formInputObj.name;
  document.querySelector('#user-email').value = formInputObj.email;
  document.querySelector('#user-message').value = formInputObj.feedback;
} else {
  document.querySelector('#user').value = '';
  document.querySelector('#user-email').value = '';
  document.querySelector('#user-message').value = '';
}
