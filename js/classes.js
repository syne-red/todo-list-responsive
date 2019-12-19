
function Todo() {
    this.title = '';
    this.content = 'hello world';

    this.complete = function () {

    }
}

function TodoManager() {
    this.todos = [];

    this.delete = function (todo) {
        // ...
        saveLocalStorage();
    }
}

let todo = new Todo();
todo.complete();

