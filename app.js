const form = document.querySelector('form'),
    emailField = form.querySelector('.input-emal'),
    inputEmail  = emailField.querySelector('#email'),
    birthField = form.querySelector('.input-birth'),
    inputBirth = birthField.querySelector('input[type="date"]'),
    passField = form.querySelector('.input-password'),
    inputPass = passField.querySelector('#password'),
    cPassField = form.querySelector('.input-confirm-password'),
    inputCPass = cPassField.querySelector('#confirm-password');

    console.log(emailField);
    console.log(inputEmail);

// We have to verify the Email

function verifyEmail() {
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!inputEmail.value.match(emailPattern)) {
        return emailField.classList.add('error');
    }
    emailField.classList.remove('error');
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    verifyEmail();
    verifyPassword();  
    verifyConfirmPassword(); 
    redirect();

});

// we have to verify the password

function verifyPassword() {
    const passPattern = /^[A-Za-z0-9]{8,}$/;
    if (!inputPass.value.match(passPattern)) {
        return passField.classList.add('error');
    }
    passField.classList.remove('error');
}

// we have to verify the confirm password

function verifyConfirmPassword() {
    if (inputPass.value !== inputCPass.value) {
        return cPassField.classList.add('error');
    }
    cPassField.classList.remove('error');
}


// redirect to the home page

function redirect() {
    if (emailField.classList.contains('error') || passField.classList.contains('error') || cPassField.classList.contains('error')) {
        return;
    }else {
        return window.location.href = 'https://www.youtube.com/watch?v=JZKjFq7TxEI&t=1431s';
    }
    
}






