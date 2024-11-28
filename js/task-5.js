function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`
}

const body = document.querySelector('body')
const span = document.querySelector('.color')

const btnEl = document.querySelector('.change-color')
btnEl.addEventListener('click', () => {
    body.style.backgroundColor = getRandomHexColor();
    span.textContent = getRandomHexColor()
})