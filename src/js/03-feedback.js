import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
  input: document.querySelector('input[type="email"]'),
  textarea: document.querySelector('textarea[name="message"]'),
};

const STORAGE_KEY = 'feedback-form-state';

const storageValue = {};

populateFormFields();

refs.form.addEventListener('input', throttle(onFormInputClick, 500));
refs.form.addEventListener('submit', onButtonSubmitClick);

function onFormInputClick(event) {
  event.preventDefault();

  if (event.target.tagName === 'INPUT') {
    storageValue.email = event.target.value;
  } else if (event.target.tagName === 'TEXTAREA') {
    storageValue.message = event.target.value;
  }

  localStorage.setItem(STORAGE_KEY, JSON.stringify(storageValue));
}

function populateFormFields() {
  const storageData = JSON.parse(localStorage.getItem(STORAGE_KEY));

  if (storageData) {
    refs.input.value = storageData.email;
    refs.textarea.value = storageData.message;
  }

  //   refs.input.value = storageData.email ? storageData.email : '';
  //   refs.textarea.value = storageData.message ? storageData.message : '';
}

function onButtonSubmitClick(event) {
  event.preventDefault();

  event.target.reset();
  console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));
  localStorage.removeItem(STORAGE_KEY);
}
