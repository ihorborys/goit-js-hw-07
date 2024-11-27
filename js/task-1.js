const list = document.querySelector('ul#categories');
console.log(`Number of categories: ${list.children.length}`);

const arrList = Array.from(list.children);
arrList.forEach(list => {
    console.log(`Category: ${list.firstElementChild.textContent}`)
    console.log(`Elements: ${list.firstElementChild.nextElementSibling.childElementCount}`)
})