const form = document.querySelector('form');
const email = document.getElementById('inputEmail4');
const password = document.getElementById('inputPassword4');
const address = document.getElementById('inputAddress');
const city = document.getElementById('inputCity');
const state = document.getElementById('inputState');
const checkbox = document.getElementById('gridCheck');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (!validateEmail(email.value)) {
    alert('Please enter a valid email address');
    email.focus();
    return false;
  }
  if (password.value.length < 6) {
    alert('Password must be at least 6 characters long');
    password.focus();
    return false;
  }
  if (address.value.trim() === '') {
    alert('Please enter your address');
    address.focus();
    return false;
  }
  if (city.value.trim() === '') {
    alert('Please enter your city');
    city.focus();
    return false;
  }
  if (state.value === 'Choose...') {
    alert('Please select your state');
    state.focus();
    return false;
  }
  if (!checkbox.checked) {
    alert('Please check the checkbox');
    checkbox.focus();
    return false;
  }
  form.submit();
});

function validateEmail(email) {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
}
