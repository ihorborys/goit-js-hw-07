const inputField = document.querySelector('#name-input')
const outputField = document.querySelector('#name-output')

inputField.addEventListener('input', () => {
    inputField.value = inputField.value.trimStart();

    outputField.textContent = inputField.value;

    if (!inputField.value) {
        outputField.textContent = 'Anonymous';
    }

    inputField.value = inputField.value.trimEnd();
})