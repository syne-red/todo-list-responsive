var LocalStorageManager = (function () {
    // a constant key for the local storage data
    // 'ls' stands for local storage
    const LocalStorageKeyName = 'asdasdasd';

    // global storage object we update and is saved to browser LocalStorage as it is
    let storage = null;

    function init() { // called when the page loads, load the local storage from browser
        loadLocalStorage();
    }

    function initializeDefaultLocalStorage() {
        // if the page is loaded the first time then create the default local storage
        storage = {
            todos: []
        }

        save();
    }

    function getAllTodos() {
        return getStorage().todos;
    }

    function addTodo(todo) {
        getStorage().todos.push(todo);

        save();
    }

    function loadLocalStorage() {
        // load the local storage once only when the page is loaded

        // try to load local storage once
        let localStorageData = localStorage.getItem(LocalStorageKeyName);

        // if the local storage is set
        if (localStorageData !== null) {
            // load the data from local storage
            storage = JSON.parse(localStorageData);
        } else {
            // save the local storage object once we created it so it exist in browser
            initializeDefaultLocalStorage();
        }
    }

    function save() {
        // save the local storage every single tiny little change
        localStorage.setItem(LocalStorageKeyName, JSON.stringify(storage));
    }

    function getStorage() {
        return storage;
    }

    return {
        init,
        save,
        getStorage,
        getAllTodos,
        addTodo
    }
})();