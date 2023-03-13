import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const input = document.querySelector('[name="email"]');
const textarea = document.querySelector('[name="message"]');

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onSaveData, 500));

const formData = {};

const KEY_STORAGE = 'feedback-form-state';

function onFormSubmit(e) {
  e.preventDefault();
  e.currentTarget.reset();
  localStorage.removeItem(KEY_STORAGE);
  console.log(formData);
}

function onSaveData(e) {
  formData.email = input.value;
  formData.message = textarea.value;

  localStorage.setItem(KEY_STORAGE, JSON.stringify(formData));
}

populateMessage();

function populateMessage() {
  const savedData = JSON.parse(localStorage.getItem(KEY_STORAGE));
  if (savedData) {
    input.value = savedData.email;
    textarea.value = savedData.message;
  }
}
