function login() {

    //Declare variables and connect to IDs
    let emailBox = document.getElementById('email').value;
    let passwordBox = document.getElementById('password').value;
    
    //Declare variables and assign regular expressions
    let passRegexp = new RegExp ("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[-+_!@#$%^&*.,?]).+$");
    let emailRegexp = new RegExp(/@/);
  
    //Setting conditions
    if (emailBox === '') {
        alert('Please, write down your email');
    } 
    else if (passwordBox === '') {
        alert('Please, write down your password');
    } 
    else if (passwordBox.length < 8) {
      alert('Your password must contain at least 8 characters');
    } 
    else if (emailRegexp.test(emailBox) === false) {
      alert('Please, write an appropriate email address');
    }
    else if (passRegexp.test(passwordBox) === false) {
      alert('Password must contain uppercase and lowercase characters, numbers, and special characters')
    }
    else {
        alert('User created, thank you')
    }
}