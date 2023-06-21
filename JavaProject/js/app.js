

document.getElementById('login-form').addEventListener('submit', function (event) {
    if (!validateLoginForm()) {
        event.preventDefault();
    }
});



function validateLoginForm() {
    // Get the username and password values from the form
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

   


     // Check if the username field is empty
  if (!username) {
    document.getElementById('user').innerHTML = "**Please fill in the username field";
    return false;
  }
 

  // Check if the username is not a number
  if (!isNaN(username)) {
    document.getElementById('user').innerHTML = "**Username cannot be a number";
    return false;
  }
 

  // Check if the username length is too short or too long
  if (username.length < 3 || username.length > 20) {
    document.getElementById('user').innerHTML = "**Username must be between 3 and 20 characters long";
    return false;
  }

   else if (isNaN(username)) {
        document.getElementById('user').innerHTML = "**Username cannot use number at any position";
        return false;
    }
   
    //Now validation for password

    // Check if the password field is empty
    if (!password) {
        document.getElementById('pass').innerHTML = "**please fill the password fill";
        return false;
    }
   

    // Check if the password length is too short
    if (password.length < 8) {
        document.getElementById('pass').innerHTML = "** Password must be at least 8 characters long.";
        return false;
    }

    // Check if the password length is too long
    if (password.length > 20) {
        document.getElementById('pass').innerHTML = "**Password must be less than 20 characters long.";
        return false;
    }

    // // Check if the password contains at least one uppercase letter, one lowercase letter, and one digit
    // const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,20}$/;
    // if (!passwordRegex.test(password)) {
    //   alert('Password must contain at least one uppercase letter, one lowercase letter, and one digit.');
    //   return false;
    // }

    // If all validations pass, return true
    return true;
}

