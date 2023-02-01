const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");

button.addEventListener('click', function() {
    const item = input.value;
    input.value = '';

    const listElements = document.createElement('li');
    listElements.innerHTML = item;
    list.appendChild(listElements);

    const delButton = document.createElement('button');
    listElements.appendChild(delButton);
    delButton.textContent = 'delete';
    delButton.addEventListener('click', () => {
        list.removeChild(listElements);
    });
    
    input.focus();
});