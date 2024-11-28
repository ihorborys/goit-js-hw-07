const loginForm = document.querySelector('.login-form')

const onFormSubmit = event => {
    event.preventDefault();
    if (!loginForm.elements.email.value || !loginForm.elements.password.value) {
        alert('All form fields must be filled in')
    }
    const formData = {
        email: loginForm.elements.email.value.trim(),
        password: loginForm.elements.password.value.trim()
    }
    console.log(formData);
    loginForm.reset();
}

loginForm.addEventListener('submit', onFormSubmit);
