const TodoListInputTextBox = '#input-list-item';
const TodoListInputAddButton = '#input-button';
const TodoList = '#todo-main';

let storage = {
    users: [] // array of User class
};

function onPageLoaded() {
    // load the local storage once only when the page is loaded

    let localStorageData = localStorage.getItem('data');
    if (localStorageData === null) {
        storage = {
            users: []
        }

        saveLocalStorage();
    }

    storage = JSON.parse(localStorage.getItem('data'));
}

function saveLocalStorage() {
    // save the local storage every single tiny little change
    localStorage.setItem('data', JSON.stringify(storage));
}

$(function () { // called on body loaded
    DocumentEdit.init();
    EventHandler.init();

    onPageLoaded();
})