let validation = (function () {
  let form = document.querySelector('.contact__form');
  let emailInput = document.querySelector('#email');
  let phoneNumberInput = document.querySelector('#telephone');
  let messageInput = document.querySelector('#message');

  function showErrorMessage(input, message) { 
    let container = input.parentElement;

    let error = container.querySelector('.error-message');
    if (error) {
      container.removeChild(error);
    }
    if (message) {
      let error = document.createElement('div');
      error.classList.add('error-message');
      error.innerText = message;
      container.appendChild(error);
    }
  }

  //Validate email
  function validateEmail() {
    let value = emailInput.value;

    if (!value) {
      showErrorMessage(emailInput, 'Email is required');
      return false;
    }
    if (value.indexOf('@') === -1) {
      showErrorMessage(emailInput, 'Invalid email');
      return false;
    }

    if(value.indexOf('.') === -1) {
      showErrorMessage(emailInput, 'Invalid email');
      return false;
    }

    showErrorMessage(emailInput, null);
    return true;
  }

  function validatePhoneNumber() { 
    let value = phoneNumberInput.value;
    if (!value) {
      showErrorMessage(phoneNumberInput, 'Phone number is required');
      return false;
    }
    if (value.length < 10) {
      showErrorMessage(phoneNumberInput, 'Invalid phone number');
      return false;
    }

    showErrorMessage(phoneNumberInput, null);
    return true;
  }

  function validateMessage() { 
    let value = messageInput.value;
    if (!value) {
      showErrorMessage(messageInput, 'Message is required');
      return false;
    }

    showErrorMessage(messageInput, null);
    return true;
  }

  function validateForm() { 
    let isValidEmail = validateEmail();
    let isValidPhoneNumber = validatePhoneNumber();
    let isValidMessage = validateMessage();

    return isValidEmail && isValidPhoneNumber && isValidMessage;
  }

  emailInput.addEventListener('input', validateEmail);
  phoneNumberInput.addEventListener('input', validatePhoneNumber);
  messageInput.addEventListener('input', validateMessage);

  form.addEventListener('submit', (e) => { 
    e.preventDefault();
    if (validateForm()) {
      alert('Form submitted');
    }
  });


  return {
    validateEmail,
    validatePhoneNumber,
    validateMessage,
    validateForm
  }
})();