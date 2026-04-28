const LS_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');

const formData = {
  email: '',
  message: '',
};

// 1. ВІДНОВЛЕННЯ ДАНИХ ПРИ ЗАВАНТАЖЕННІ

const savedData = JSON.parse(localStorage.getItem(LS_KEY));

if (savedData) {
  formData.email = savedData.email || '';
  formData.message = savedData.message || '';

  form.elements.email.value = formData.email;
  form.elements.message.value = formData.message;
}

// 2. INPUT (делегування)

form.addEventListener('input', handleInput);

function handleInput(event) {
  const { name, value } = event.target;

  formData[name] = value;

  localStorage.setItem(LS_KEY, JSON.stringify(formData));
}

// 3. SUBMIT

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
    return;
  }

  console.log(formData);

  localStorage.removeItem(LS_KEY);

  formData.email = '';
  formData.message = '';

  form.reset();
}
