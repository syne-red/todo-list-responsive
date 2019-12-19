const TodoListInputTextBox = '#input-list-item';
const TodoListInputAddButton = '#input-button';
const TodoList = '#todo-main';

function onPageLoaded() {
    // load the local storage once only when the page is loaded

    let localStorageData = localStorage.getItem('data');
    if (localStorageData === null) {
        saveLocalStorage();
    }

    storage = JSON.parse(localStorage.getItem('data'));
}

function saveLocalStorage() {
    // save the local storage every single tiny little change
    localStorage.setItem('data', JSON.stringify(storage));
}

$(function () { // called on body loaded
    LocalStorageManager.init();
    DocumentEdit.init();
    EventHandler.init();
    onPageLoaded();
})