// Функція для генерації випадкового кольору
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`
}

// Отримуємо елементи з DOM
const input = document.getElementById("inputNumber");
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const boxesContainer = document.getElementById("boxes");

// Додаємо слухачі подій
createBtn.addEventListener("click", () => {
    const amount = Number(input.value);

    if (amount >= 1 && amount <= 100) {
        createBoxes(amount); // Створюємо елементи
        input.value = ""; // Очищуємо input
    } else {
        alert("Будь ласка, введіть число від 1 до 100!");
    }
});

destroyBtn.addEventListener("click", destroyBoxes);

// Функція для створення елементів
function createBoxes(amount) {
    // Очищуємо попередню колекцію
    boxesContainer.innerHTML = "";

    const elements = [];
    let size = 30; // Початковий розмір

    for (let i = 0; i < amount; i++) {
        const div = document.createElement("div");
        div.style.width = `${size}px`;
        div.style.height = `${size}px`;
        div.style.backgroundColor = getRandomHexColor();
        div.style.margin = "5px";
        elements.push(div);

        size += 10; // Збільшуємо розмір на 10px
    }

    // Додаємо всі елементи в DOM
    boxesContainer.append(...elements);
}

// Функція для очищення колекції
function destroyBoxes() {
    boxesContainer.innerHTML = ""; // Очищуємо вміст
}
