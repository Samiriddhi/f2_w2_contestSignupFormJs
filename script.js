const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
    const successMessage = document.getElementById('successMessage');
    const form = document.getElementById('signupForm');

    emailInput.addEventListener('input', function () {
      const value = emailInput.value;
      if (value.length > 3 && value.includes('@') && value.includes('.')) {
        emailError.textContent = '';
        checkAllValid();
      } else {
        emailError.textContent = "Email must be more than 3 characters and include '@' and '.'";
        successMessage.textContent = '';
      }
    });

    passwordInput.addEventListener('input', function () {
      const value = passwordInput.value;
      if (value.length > 8) {
        passwordError.textContent = '';
        checkAllValid();
      } else {
        passwordError.textContent = 'Password must be more than 8 characters.';
        successMessage.textContent = '';
      }
    });

    function checkAllValid() {
      if (emailError.textContent === '' && passwordError.textContent === '') {
        successMessage.textContent = 'All good to go!';
      } else {
        successMessage.textContent = '';
      }
    }

    form.addEventListener('submit', function (event) {
      event.preventDefault();

      const isConfirmed = confirm('Are you sure you want to sign up?');
      if (isConfirmed) {
        alert('Successful signup!');
      } else {
        form.reset();
        successMessage.textContent = '';
      }
    });